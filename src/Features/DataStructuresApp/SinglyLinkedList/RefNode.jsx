const NULL_NODE_WIDTH = 100;
const NULL_NOE_HEIGHT = 50;
const NULL_NODE_ROUNDED = 10;

const RefNode = ({node, name, isTop}) => {
    return (
         <g transform={`translate(${node.WIDTH/2 - node.REF_NODE_WIDTH/2}, ${node.HEIGHT/2 + (isTop ? (- node.REF_NODE_HEIGHT) : (node.REF_NODE_HEIGHT/3))})`}>
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
                    {name}
                </text>
                <path
                    d={`M${node.REF_NODE_WIDTH} ${node.REF_NODE_HEIGHT/2} L${node.REF_NODE_WIDTH + node.REF_LINE_WIDTH} ${node.REF_NODE_HEIGHT/2}`}
                    stroke={node.REF_LINE_COLOR}
                    strokeWidth={node.REF_LINE_THICKNESS}
                    strokeLinecap="round"
                />
                <g transform={`translate(${node.REF_NODE_WIDTH + node.REF_LINE_WIDTH}, ${node.REF_NODE_HEIGHT/2 - NULL_NOE_HEIGHT/2})`}>
                    <rect
                        width={NULL_NODE_WIDTH}
                        height={NULL_NOE_HEIGHT}
                        fill={node.REF_NODE_BG}
                        rx={NULL_NODE_ROUNDED}
                    />
                    <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontWeight="bold"
                        x={NULL_NODE_WIDTH/2}
                        y={NULL_NOE_HEIGHT/2}
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