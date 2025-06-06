import { useContext } from "react";
import { TailLineXContext, TailLineYContext, TailRefContext, TailRefTextContext } from "../../../context/sll/headRefContext";

const NULL_NODE_WIDTH = 100;
const NULL_NOE_HEIGHT = 50;
const NULL_NODE_ROUNDED = 10;


const TailRef = ({list, domVirtualTailLineY}) => {
    const domtailRef = useContext(TailRefContext);
    const domTailLineX = useContext(TailLineXContext);
    const domTailLineY = useContext(TailLineYContext);
    const domTailText = useContext(TailRefTextContext);

    return (
       <g transform={`translate(${list.WIDTH/2 - list.HEAD_WIDTH/2}, ${list.HEIGHT/2 + list.HEAD_HEIGHT/3})`}>
                 <path
                    d={list.getTailLineYAttr(0)}
                    strokeLinecap="round"
                    strokeWidth={list.REF_LINE_THICKNESS}
                    stroke={list.REF_LINE_COLOR}
                    fill="none"
                    opacity={list.isEmpty() ? 0 : 1}
                    strokeLinejoin="round"
                    ref={domTailLineY}
                />
                   <path
                    d={`M${list.HEAD_WIDTH/2} ${list.HEAD_HEIGHT} L${list.HEAD_WIDTH/2} ${list.HEAD_HEIGHT} L${list.HEAD_WIDTH/2} ${list.HEAD_HEIGHT} L${list.HEAD_WIDTH/2} ${list.HEAD_HEIGHT}`}
                    strokeWidth={list.REF_LINE_THICKNESS}
                    stroke={list.VIRTUAL_TAIL_LINE_COLOR}
                    fill="none"
                    opacity={list.isEmpty() ? 0 : 1}
                    strokeLinejoin="round"
                    ref={domVirtualTailLineY}
                />
                <rect
                    width={list.HEAD_WIDTH}
                    height={list.HEAD_HEIGHT}
                    fill={list.HEAD_BG}
                    rx={list.REF_NODE_ROUNDED}
                    ref={domtailRef}
                />
                <text 
                    fill="white"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    x={list.HEAD_WIDTH/2}
                    y={list.HEAD_HEIGHT/2}
                    fontWeight="bold"
                    fontSize={28}
                    ref={domTailText}
                >
                    Tail
                </text>
                <path
                    d={`M${list.HEAD_WIDTH} ${list.HEAD_HEIGHT/2} L${list.HEAD_WIDTH + list.REF_LINE_WIDTH} ${list.HEAD_HEIGHT/2}`}
                    stroke={list.REF_LINE_COLOR}
                    strokeWidth={list.REF_LINE_THICKNESS}
                    strokeLinecap="round"
                    opacity={list.isEmpty() ? 1 : 0}
                    ref={domTailLineX}
                />
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

export default TailRef