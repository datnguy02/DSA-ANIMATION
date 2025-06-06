import { useContext } from "react";
import { NextRefContext, NextRefTextContext, RefLineContext } from "../../../context/sll/nodeRefContext";

const RefNode = ({node, name, domNextNull, domVirtualRefLine}) => {
    const isLast = node.next === null;
    const domRefLine = useContext(RefLineContext);
    const domNextRef = useContext(NextRefContext);
    const domNextRefText = useContext(NextRefTextContext);

    return (
         <g transform={`translate(${node.refNodeX}, ${node.refNodeY})`}
         >
                <path
                    d={node.getRefLineAttr(node.REF_LINE_WIDTH, 0)}
                    stroke={node.REF_LINE_COLOR}
                    strokeWidth={node.REF_LINE_THICKNESS}
                    strokeLinecap="round"
                    ref={domRefLine}
                />
                <path
                    d={node.getRefLineAttr(0, 0)}
                    strokeWidth={node.REF_LINE_THICKNESS}
                    ref={domVirtualRefLine}
                />
                <rect
                    width={node.REF_NODE_WIDTH}
                    height={node.REF_NODE_HEIGHT}
                    fill={node.REF_NODE_BG}
                    rx={node.REF_NODE_RAD}
                    ref={domNextRef}
                />
                <text 
                    fill="white"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    x={node.REF_NODE_WIDTH/2}
                    y={node.REF_NODE_HEIGHT/2}
                    fontWeight="bold"
                    fontSize={28}
                    ref={domNextRefText}
                >
                    {name}
                </text>
                <g transform={`translate(${node.REF_NODE_WIDTH + node.REF_LINE_WIDTH}, ${node.REF_NODE_HEIGHT/2 - node.NULL_HEIGHT/2})`}
                    opacity={isLast ? 1 : 0}
                    ref={domNextNull}
                    className="transform-fill"
                    transformOrigin="left center"
                >
                    <rect
                        width={node.NULL_WIDTH}
                        height={node.NULL_HEIGHT}
                        fill={node.REF_NODE_BG}
                        rx={node.NULL_ROUND}
                    />
                    <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontWeight="bold"
                        x={node.NULL_WIDTH/2}
                        y={node.NULL_HEIGHT/2}
                        fill="white"
                        fontSize={26}    
                    >
                            Null
                    </text>
                </g>
        </g>
    );
};

export default RefNode