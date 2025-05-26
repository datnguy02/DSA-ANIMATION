import { useRef, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
const NULL_NODE_WIDTH = "150";
const NULL_NODE_HEIGHT = "80";
const NULL_NODE_ROUNED = "15";

const NullNode = ({x, y, angle, animeDuration, moveAmount, bg, color}) => {
    const node = useRef(null);

    useEffect(() => {
        gsap.to(node.current, {
            attr: {
                transform: `translate(${x}, ${y + moveAmount}) rotate(${angle})`
            },
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            duration: animeDuration
        })
    }, [])


    return (
        <g ref={node}
            transform={`translate(${x}, ${y}) rotate(${angle})`}
        >
            <rect
                fill={bg}
                rx={NULL_NODE_ROUNED}
                width={NULL_NODE_WIDTH}
                height={NULL_NODE_HEIGHT}
            />
            <text
                textAnchor="middle"
                dominantBaseline="middle"
                fill={color} 
                fontSize={40}
                x={NULL_NODE_WIDTH/2}
                y={NULL_NODE_HEIGHT/2}
                fontWeight="bold"
            >
                Null
            </text>
        </g>
    );
};

export default NullNode