const Node = ({node}) => {
    return (
        <g transform={`translate(${node.x}, ${node.y})`}
            className="transform-fill"
             transformOrigin="center"
        >
            <circle
                fill={node.BG}
                stroke={node.BORDER}
                strokeWidth={node.STROKE_WIDTH}
                r={node.RADIUS}
            />
             <text  fontWeight="bold" 
                    y={0}
                    x={0}
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill={node.TEXT}
                    fontSize={node.TEXT_SIZE}
            >
                {node.value}
            </text>
             <g 
                transform={`translate(${-50-25}, ${20}) rotate(${node.getAngle(true)})`}
                className="transform-fill"
                transformOrigin={`${node.REF_WIDTH/2} ${0}`}
            >
                <path
                    d={node.getRefLineAttr(true)}
                    stroke={node.BORDER}
                    strokeWidth={node.STROKE_WIDTH}
                />
                <rect
                    width={node.REF_WIDTH}
                    height={node.REF_HEIGHT}
                    rx={15}
                    fill={node.BG}
                    stroke={node.BORDER}
                    strokeWidth={node.STROKE_WIDTH}
                />
                <text
                    fontWeight="bold"
                    fill={node.TEXT}
                    fontSize={node.TEXT_SIZE}
                    x={25}
                    y={40}
                    textAnchor="middle"
                    dominantBaseline="middle"
                >
                    L
                </text>
            </g>
        </g>);

};

export default Node