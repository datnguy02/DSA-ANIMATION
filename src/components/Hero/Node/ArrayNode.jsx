import { array_node } from "../../UI/style";
import { gsap } from "gsap/gsap-core";
import { useRef, useEffect } from "react";

const ArrayNode = ({x, y, data, animeDuration, moveAmount, idx, angle}) => {
    const node = useRef(null);
    useEffect(() => {
        gsap.to(node.current, {
            attr: {
                transform: `translate(${x}, ${y + moveAmount}) rotate(${angle})`
            },
            duration: animeDuration,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
        })
    }, [])

    return (
        <g transform={`translate(${x}, ${y}) rotate(${angle})`}
            className="transform-fill"
            transformOrigin="center"
            ref={node}
        >
            <rect
                width={array_node.node_width}
                height={array_node.node_height}
                fill={array_node.node_bg}
                rx={array_node.node_rounded}
                stroke={array_node.node_stroke}
                strokeWidth={array_node.node_stroke_width}
            />
            <text
                fill="white"
                x={array_node.node_width/2}
                y={array_node.node_height/3}
                fontSize={array_node.fontSize + 10}
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
            >
                {idx}
            </text>
            <g transform={`translate(${array_node.node_width/2 - array_node.node_data_width/2 }, ${array_node.node_height/2 -10})`}>
                <rect
                    fill={array_node.node_data_bg}
                    width={array_node.node_data_width}
                    height={array_node.node_data_height}
                    rx={array_node.node_rounded}
                />
                <text
                    fill="white"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={array_node.fontSize}
                    fontWeight="bold"
                    x={array_node.node_data_width/2}
                    y={array_node.node_data_height/2}
                >
                    {data}
                </text>
            </g>
        </g>
    );
};

export default ArrayNode