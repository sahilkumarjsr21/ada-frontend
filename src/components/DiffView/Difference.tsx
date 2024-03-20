'use client'
import {
    Diff,
    Hunk,
    useSourceExpansion,
    useMinCollapsedLines,
    HunkData,
    MarkEditsType,
    DiffType,
    GutterOptions,
    EventMap,
} from 'react-diff-view';
import '@/../react-diff-view/style/index.css';
import { useConfiguration } from './context/configuration';
import { useSelection } from './hooks/selection';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import CommentComponent from '../CommentComponent';
import UnfoldCollapsed from './UnfoldCollapse';
import HunkInfo from './HunkInfo';
import tokenizer from './Tokenize';
import { nanoid } from 'nanoid'
import { comment } from 'postcss';
import { useIsLoading } from './context/diffcontext';

interface EnhanceOptions {
    language: string;
    editsType: MarkEditsType;
}

interface CommentData {
    id: string;
    changeKey: string;
    state: 'display';
    content: string;
    time: Date;
}

interface tokenizePayload {
    oldSource?: string
    language: string
    editsType: MarkEditsType
    hunks: Array<HunkData>
}

function useEnhance(hunks: HunkData[], oldSource: string | null, { language, editsType }: EnhanceOptions) {
    const [hunksWithSourceExpanded, expandRange] = useSourceExpansion(hunks, oldSource);
    const changeKeys = hunks.map(hunk => hunk.changes.map(change => change.type === 'insert' ? 'I' + change.lineNumber : undefined)).map(data => data.filter(changeKey => changeKey !== undefined)).flat()
    const hunksWithMinLinesCollapsed = useMinCollapsedLines(0, hunksWithSourceExpanded, oldSource);
    const [selection, toggleSelection] = useSelection(hunksWithMinLinesCollapsed);
    const tokenizePayload = {
        oldSource,
        language,
        editsType,
        hunks: hunksWithMinLinesCollapsed,
    };
    return {
        expandRange,
        selection,
        toggleSelection,
        hunks: hunksWithMinLinesCollapsed,
        changeKeys,
        tokenizePayload
    };
}
interface Props {
    oldSource: string | null;
    type: DiffType;
    hunks: HunkData[];
    commentData: Array<string>
}

function useComments() {
    const [comments, setComments] = useState<CommentData[]>([]);
    const addComment = useCallback(
        (changeKey: string) => {
            const addNew = (state: CommentData[]): CommentData[] => [
                ...state,
                { changeKey, id: "1234", state: 'display', content: '', time: new Date() },
            ];
            setComments(addNew);
        },
        []
    );
    return { comments }
}

function DiffView(props: Props) {
    const configuration = useConfiguration();
    const { viewType, showGutter } = configuration
    const { oldSource, type, commentData } = props;
    const {
        expandRange,
        selection,
        toggleSelection,
        hunks,
        changeKeys,
        tokenizePayload
    } = useEnhance(props.hunks, oldSource, configuration);
    const tokens = useMemo(() => tokenizer(tokenizePayload), [tokenizePayload]);
    console.log(changeKeys)


    const comments: { [key: string]: CommentData } = useMemo(() => Object.fromEntries(commentData.map((comment, index) =>
        [changeKeys[index], { key: nanoid(), content: comment, time: new Date() }])), [commentData, changeKeys]);

    console.log(comments);
    const widgets = useMemo(
        () => Object.entries(comments).reduce<Record<string, ReactElement[]>>(
            (widgets, [key, value]) => {
                if (!widgets[key]) {
                    // eslint-disable-next-line no-param-reassign
                    widgets[key] = [];
                }
                widgets[key].push(
                    <CommentComponent
                        key={value.id}
                        id={value.id}
                        content={value.content}
                        time={value.time}
                    />
                );
                return widgets;
            },
            {}
        ),
        [comments]
    );

    console.log(widgets)
    console.log('configuration' +JSON.stringify(configuration));


    // const renderGutter = useCallback(
    //     ({ change, side, inHoverState, renderDefault, wrapInAnchor }: GutterOptions) => {
    //         const canComment = inHoverState && (viewType === 'split' || side === 'new');
    //         if (canComment) {
    //             return <></>;
    //         }

    //         return wrapInAnchor(renderDefault());
    //     },
    //     [addComment, viewType]
    // );


    const events: EventMap = {
        onClick: toggleSelection,
    };

    const linesCount = oldSource ? oldSource.split('\n').length : 0;
    const renderHunk = (children: ReactElement[], hunk: HunkData, i: number, hunks: HunkData[]) => {
        const previousElement = children[children.length - 1];
        const decorationElement = oldSource
            ? (
                <UnfoldCollapsed
                    key={`decoration-${hunk.content}`}
                    previousHunk={previousElement && previousElement.props.hunk}
                    currentHunk={hunk}
                    linesCount={linesCount}
                    onExpand={expandRange}
                />
            )
            : <HunkInfo key={`decoration-${hunk.content}`} hunk={hunk} />;
        children.push(decorationElement);

        const hunkElement = (
            <Hunk
                key={`hunk-${hunk.content}`}
                hunk={hunk}
            />
        );
        children.push(hunkElement);

        if (i === hunks.length - 1 && oldSource) {
            const unfoldTailElement = (
                <UnfoldCollapsed
                    key="decoration-tail"
                    previousHunk={hunk}
                    linesCount={linesCount}
                    onExpand={expandRange}
                />
            );
            children.push(unfoldTailElement);
        }

        return children;
    };

    return (
        <Diff
            optimizeSelection
            viewType={viewType}
            diffType={type}
            hunks={hunks}
            gutterType={showGutter ? 'default' : 'none'}
            selectedChanges={selection}
            tokens={tokens}
            widgets={widgets}
            codeEvents={events}
            gutterEvents={events}
        // renderGutter={renderGutter}
        >
            {hunks => hunks.reduce(renderHunk, [])}
        </Diff>
    );
}

export default DiffView