import {createElement, useCallback} from 'react';
// import {CaretUpOutlined, CaretDownOutlined, PlusCircleOutlined} from ;
import { ChevronDown, ChevronUp, PlusCircle } from 'lucide-react';
import {Decoration, DecorationProps} from 'react-diff-view';
// import styles from './Unfold.less';

const ICON_TYPE_MAPPING = {
    up: ChevronUp,
    down: ChevronDown,
    none: PlusCircle,
};

interface Props extends Omit<DecorationProps, 'children'> {
    start: number;
    end: number;
    direction: 'up' | 'down' | 'none';
    onExpand: (start: number, end: number) => void;
}

export default function Unfold({start, end, direction, onExpand, ...props}: Props) {
    const expand = useCallback(
        () => onExpand(start, end),
        [onExpand, start, end]
    );

    const iconType = ICON_TYPE_MAPPING[direction];
    const lines = end - start;

    return (
        <Decoration {...props}>
            <div className="flex mx-auto justify-center items-center py-1 text-center cursor-pointer bg-gray-100 hover:bg-gray-200" onClick={expand}>
                {createElement(iconType)}
                &nbsp;Expand hidden {lines} lines
            </div>
        </Decoration>
    );
}