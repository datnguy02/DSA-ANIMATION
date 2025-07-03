const NullNode = ({node, isLeft, container, domNull, text}) => {
    const x = - node.NULL_WIDTH/2 + (isLeft ? -node.getChildGap()/2 :  node.getChildGap()/2);
    const y = node.vertical_gap - node.NULL_HEIGHT/2;

    return (<g 
            transform={`translate(${x}, ${y})`}  
            transformOrigin={`${node.NULL_WIDTH/2} 0`}
            opacity={(isLeft && node.left !== null) || (!isLeft && node.right !== null) ? 0 : 1}
            ref={container}
        >
            <rect
                width={node.NULL_WIDTH}
                height={node.NULL_HEIGHT}
                fill={node.NULL_BG}
                rx={15}
                ref={domNull}
            />
            <text
                fontWeight="bold"
                fontSize={node.NULL_TEXT_SIZE}
                textAnchor="middle"
                dominantBaseline="middle"
                x={node.NULL_WIDTH/2}
                y={node.NULL_HEIGHT/2}
                fill={node.NULL_TEXT}
                ref={text}
            >Null</text>
        </g>);
};

export default NullNode;