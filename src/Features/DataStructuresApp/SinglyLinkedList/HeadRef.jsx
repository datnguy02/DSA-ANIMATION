import { useContext } from "react";
import { HeadLineContext, HeadRefContext, HeadRefTextContext } from "../../../context/sll/headRefContext";

const NULL_NODE_WIDTH = 100;
const NULL_NOE_HEIGHT = 50;
const NULL_NODE_ROUNDED = 10;


const HeadRef = ({list, domVirtualHeadLine, domVirtualHead, virtualHeadVisibility}) => {
    const domHead = useContext(HeadRefContext);
    const domHeadLine = useContext(HeadLineContext);
    const domHeadText = useContext(HeadRefTextContext);

    return (
       <g transform={`translate(${list.WIDTH/2 - list.HEAD_WIDTH/2}, ${list.HEIGHT/2 - list.HEAD_HEIGHT})`}
       >        
                  <path
                    d={list.getHeadLineAttr(list.REF_LINE_WIDTH, 0)}
                    stroke={list.REF_LINE_COLOR}
                    strokeWidth={list.REF_LINE_THICKNESS}
                    ref={domHeadLine}
                    strokeLinecap="round"
                />
                <path
                    d={list.getHeadLineAttr(0, 0)}
                    strokeWidth={list.REF_LINE_THICKNESS}
                    ref={domVirtualHeadLine}
                    strokeLinecap="round"
                />
                <rect
                    width={list.HEAD_WIDTH}
                    height={list.HEAD_HEIGHT}
                    fill={list.HEAD_BG}
                    rx={list.REF_NODE_ROUNDED}
                    ref={domHead}
                />
                 <rect
                    width={list.HEAD_WIDTH}
                    height={list.HEAD_HEIGHT}
                    rx={list.REF_NODE_ROUNDED}
                    fill={list.HEAD_BG}
                    ref={domVirtualHead}
                    opacity={virtualHeadVisibility}
                />
                <text 
                    fill="white"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    x={list.HEAD_WIDTH/2}
                    y={list.HEAD_HEIGHT/2}
                    fontWeight="bold"
                    fontSize={28}
                    ref={domHeadText}

                >
                    Head
                </text>
                <g transform={`translate(${list.HEAD_WIDTH + list.REF_LINE_WIDTH}, ${list.HEAD_HEIGHT/2 - NULL_NOE_HEIGHT/2})`}
                     opacity={list.isEmpty() ? 1 : 0}
                >
                    <rect
                        width={NULL_NODE_WIDTH}
                        height={NULL_NOE_HEIGHT}
                        fill={list.HEAD_BG}
                        rx={NULL_NODE_ROUNDED}
                    />
                    <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontWeight="bold"
                        x={NULL_NODE_WIDTH/2}
                        y={NULL_NOE_HEIGHT/2}
                        fill="white"
                        fontSize={28}    
                    >
                            Null
                    </text>
                </g>
        </g>
    );
};

export default HeadRef