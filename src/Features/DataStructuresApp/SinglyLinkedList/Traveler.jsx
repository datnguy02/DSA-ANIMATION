const Traveler = ({name, node, visible}) => {

    return (
            <g transform={`translate(${node.startX}, ${node.startY})`}
                opacity={visible ? 1 : 0}
            >
                <rect height={node.HEIGHT} width={node.WIDTH} fill={node.BG}
                    stroke={node.STROKE}
                    rx={node.ROUND}
                    strokeWidth={node.STROKE_WIDTH}
                />
                <text
                    fill={node.TEXT}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    x={node.WIDTH/2}
                    y={node.HEIGHT/2}
                    fontWeight="bold"
                    fontSize={25}
                >{name}</text>
                <path
                    d={node.getLineAttr(node.LINE_HEIGHT)}
                    stroke={node.STROKE}
                    strokeWidth={node.STROKE_WIDTH}
                    strokeLinecap="round"
                />
            </g>
    );
};

export default Traveler