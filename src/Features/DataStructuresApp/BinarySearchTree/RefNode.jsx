const RefNode = ({node, isLeft, reference, line}) => {

    const angle = node.getAngle();
    const rad = (90 - angle) * (Math.PI/180);
    const y = Math.sin(rad - 0.4) * node.RADIUS;
    const x = Math.cos(rad - 0.4) * node.RADIUS;
    const transform = `translate(${(isLeft ? -x : x) - node.REF_WIDTH/2}, ${y}) rotate(${isLeft ? angle : -angle})`;
    return (<g 
                transform={transform}
                className="transform-fill"
                transformOrigin={`${node.REF_WIDTH/2} ${0}`}
            >
                <path
                    d={node.getRefLineAttr(isLeft)}
                    stroke={node.BORDER}
                    strokeWidth={node.LINE_THICKNESS}
                    ref={line}
                    fill="none"
                />
                <rect
                    width={node.REF_WIDTH}
                    height={node.REF_HEIGHT}
                    rx={30}
                    fill={node.BG}
                    stroke={node.BORDER}
                    strokeWidth={node.STROKE_WIDTH}
                    ref={reference}
                />
                <text
                    fontWeight="bold"
                    fill={node.TEXT}
                    fontSize={node.TEXT_SIZE}
                    x={node.REF_WIDTH/2}
                    y={node.REF_HEIGHT/2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                >
                    {isLeft ? "L" : "R"}
                </text>
            </g>);
};

export default RefNode;