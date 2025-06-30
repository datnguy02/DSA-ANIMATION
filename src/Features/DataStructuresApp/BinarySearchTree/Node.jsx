import NullNode from "./NullNode";
import RefNode from "./RefNode";

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
            <RefNode node={node} isLeft={true}/>
            <RefNode node={node} isLeft={false}/>
            <NullNode node={node} isLeft={true}/>
            <NullNode node={node} isLeft={false}/>
        </g>);

};

export default Node