import { dbll_node } from "../../UI/style";
import { gsap } from "gsap/gsap-core";
import { useRef, useEffect } from "react";


const DoublyListNode = ({x, y, data, angle, animeDuration, moveAmount}) => {
    const node = useRef(null);

    useEffect(() => {
        gsap.to(node.current, {
            attr: {
                transform: `translate(${x}, ${y + moveAmount}) rotate(${angle})`,
            },
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            duration: animeDuration
        })
    }, [])

    return (
        <g transform={`translate(${x}, ${y}) rotate(${angle})`}
            className="transform-fill"
            transformOrigin="center"
            ref={node}
        >
            <rect
                width={dbll_node.node_width}
                height={dbll_node.node_height}
                fill={dbll_node.node_bg}
                rx={dbll_node.node_rounded}
                stroke={dbll_node.node_stroke}
                strokeWidth={dbll_node.node_stroke_width}
            />
            <g transform={`translate(${dbll_node.node_width/2 - dbll_node.ref_node_width/2}, ${dbll_node.node_height/5})`}>
                <rect
                    fill={dbll_node.ref_node_bg}
                    width={dbll_node.ref_node_width}
                    height={dbll_node.ref_node_height}
                    rx={dbll_node.node_rounded}
                />
                <text
                    x={dbll_node.ref_node_width/2}
                    y={dbll_node.ref_node_height/2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontWeight="bold"
                    fontSize={dbll_node.fontSize}
                    fill={dbll_node.ref_node_text}
                >
                    {data}
                </text>
            </g>
             <g transform={`translate(${dbll_node.node_width/2 - dbll_node.ref_node_width/2}, ${dbll_node.node_height/2.3})`}>
                <rect
                    fill={dbll_node.ref_node_bg}
                    width={dbll_node.ref_node_width}
                    height={dbll_node.ref_node_height}
                    rx={dbll_node.node_rounded}
                />
                <text
                    x={dbll_node.ref_node_width/2}
                    y={dbll_node.ref_node_height/2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontWeight="bold"
                    fontSize={dbll_node.fontSize}
                    fill={dbll_node.ref_node_text}
                >
                    Next
                </text>
            </g>
             <g transform={`translate(${dbll_node.node_width/2 - dbll_node.ref_node_width/2}, ${dbll_node.node_height/1.5})`}>
                <rect
                    fill={dbll_node.ref_node_bg}
                    width={dbll_node.ref_node_width}
                    height={dbll_node.ref_node_height}
                    rx={dbll_node.node_rounded}
                />
                <text
                    x={dbll_node.ref_node_width/2}
                    y={dbll_node.ref_node_height/2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontWeight="bold"
                    fontSize={dbll_node.fontSize}
                    fill={dbll_node.ref_node_text}
                >
                    Previous
                </text>

            </g>
        </g>

    );
};

export default DoublyListNode