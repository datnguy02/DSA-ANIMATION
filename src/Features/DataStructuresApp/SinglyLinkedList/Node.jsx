import { useEffect, useRef } from "react";
import RefNode from "./RefNode";
import { NextRefContext, NextRefTextContext, RefLineContext } from "../../../context/sll/nodeRefContext";

const Node = ({node}) => {
    const data = node.value;
    const domNode = useRef(null);
    const domNodeContainer = useRef(null);
    const domData = useRef(null);
    const domDataText = useRef(null);
    const domNextRef = useRef(null);
    const domNextRefText = useRef(null);
    const domRefLine = useRef(null);

    useEffect(() => {
        node.domNode = domNode.current;
        node.nodeContainer = domNodeContainer.current;
        node.dataContainer = domData.current;
        node.dataText = domDataText.current;
        node.nextRef = domNextRef.current;
        node.refLine = domRefLine.current;
        node.nextRefText = domNextRefText.current;
        return () => {
           node.domNode = null;
           node.domNodeContainer = null;
        }

    }, [node])

    return (
        <g transform={`translate(${node.x}, ${node.y})`}
            ref={domNodeContainer}
             className="transform-fill"
                transformOrigin={`${node.WIDTH/2} ${node.HEIGHT/2}`}
        >
            <rect
                width={node.WIDTH}
                height={node.HEIGHT}
                fill={node.BG}
                rx={node.BORDER_RAD}
                stroke={node.STROKE}
                strokeWidth={node.STROKE_WIDTH}
                ref={domNode}
            />
            <g transform={`translate(${node.WIDTH/2 - node.REF_NODE_WIDTH/2}, ${node.HEIGHT/2 - node.REF_NODE_HEIGHT})`}
            >
                <rect
                    width={node.REF_NODE_WIDTH}
                    height={node.REF_NODE_HEIGHT}
                    fill={node.REF_NODE_BG}
                    rx={node.REF_NODE_RAD}
                    ref={domData}
                />
                <text 
                    fill="white"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    x={node.REF_NODE_WIDTH/2}
                    y={node.REF_NODE_HEIGHT/2}
                    fontWeight="bold"
                    fontSize={28}
                    ref={domDataText}
                >
                    {data}
                </text>
            </g>
            <RefLineContext value={domRefLine}>
                <NextRefContext value={domNextRef}>
                    <NextRefTextContext value={domNextRefText}>
                        <RefNode
                                node={node}
                                name="Next"
                                isTop={false}
                                isTail={false}
                                isListEmpty={false}
                        />
                    </NextRefTextContext>
                </NextRefContext>
            </RefLineContext>
        </g>
    );
};

export default Node