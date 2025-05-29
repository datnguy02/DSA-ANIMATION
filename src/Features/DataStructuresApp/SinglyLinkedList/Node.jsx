import RefNode from "./RefNode";

const Node = ({node}) => {
    const data = node.value;
    

    return (
        <g transform={`translate(${node.x}, ${node.y})`}>
            <rect
                width={node.WIDTH}
                height={node.HEIGHT}
                fill={node.BG}
                rx={node.BORDER_RAD}
                stroke={node.STROKE}
                strokeWidth={node.STROKE_WIDTH}
            />
            <g transform={`translate(${node.WIDTH/2 - node.REF_NODE_WIDTH/2}, ${node.HEIGHT/2 - node.REF_NODE_HEIGHT})`}>
                <rect
                    width={node.REF_NODE_WIDTH}
                    height={node.REF_NODE_HEIGHT}
                    fill={node.REF_NODE_BG}
                    rx={node.REF_NODE_RAD}
                />
                <text 
                    fill="white"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    x={node.REF_NODE_WIDTH/2}
                    y={node.REF_NODE_HEIGHT/2}
                    fontWeight="bold"
                    fontSize={28}
                >
                    {data}
                </text>
            </g>
            <RefNode
                node={node}
                name="Next"
                isTop={false}
                isTail={false}
                isListEmpty={false}
            />
        </g>
    );
};

export default Node