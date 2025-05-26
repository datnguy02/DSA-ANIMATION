import { stack_node } from "../../UI/style";

const StackNode = ({x, y, data, angle}) => {
    return (
        <g transform={`translate(${x}, ${y}) rotate(${angle})`}
            className="transform-fill"
            transformOrigin="center"
        >
             <rect
                width={stack_node.node_width}
                height={stack_node.node_height}
                fill={stack_node.node_bg}
                rx={stack_node.node_rounded}
                stroke={stack_node.node_stroke}
                strokeWidth={stack_node.node_stroke_width}
            />
            <text
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={stack_node.fontSize}
                fontWeight="bold"
                fill={stack_node.node_text}    
                x={stack_node.node_width/2}
                y={stack_node.node_height/2}
            >
                {data}
            </text>
        </g>
    );
};

export default StackNode