import { tokenize, markEdits, markWord, TokenizeOptions, HunkData, MarkEditsType, HunkTokens } from 'react-diff-view';
import { compact } from 'lodash';
import { refractor } from 'refractor';

export default function tokenizer(payload: { hunks: Array<HunkData>, oldSource: string | null, language: string, editsType: MarkEditsType }): HunkTokens {
    const { hunks, oldSource, language, editsType } = payload;

    const enhancers = [
        editsType as string === 'none' ? null : markEdits(hunks, { type: editsType }),
        markWord('\r', 'carriage-return', '␍'),
        markWord('\t', 'tab', '→'),
    ];

    const options = {
        highlight: language !== 'text',
        refractor: refractor,
        language: language,
        oldSource: oldSource,
        enhancers: compact(enhancers),
    } as TokenizeOptions;

    return tokenize(hunks, options);
}
