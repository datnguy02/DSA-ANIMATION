import { sll_node } from "../../UI/style";
import { useRef, useEffect } from "react";
import { gsap } from "gsap/gsap-core";


const SinglyListNode = ({data, x, y, angle, moveAmount, animeDuration}) => {
    const node = useRef(null);
    
    useEffect(() => {
        gsap.to(node.current, {
            attr: {
                transform: `translate(${x}, ${y + moveAmount}) rotate(${angle})`
            },
            duration: animeDuration,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
        });
    }, []);

    return (
        <g  transform={`translate(${x}, ${y}) rotate(${angle})`} 
            ref={node}
        >
                 <rect 
                        width={sll_node.node_width} 
                        height={sll_node.node_height} 
                        fill={sll_node.node_bg}
                        rx={20}
                        stroke={sll_node.node_stroke}
                        strokeWidth={sll_node.node_stroke_width}
                />
                <g transform={`translate(${sll_node.node_width/2 - sll_node.ref_node_width/2}, ${sll_node.node_height/2 - sll_node.ref_node_height})`}>
                    <rect
                        width={sll_node.ref_node_width}
                        height={sll_node.ref_node_height}
                        fill={sll_node.ref_node_bg}
                        rx={15}
                    />
                    <text   fontSize={sll_node.fontSize}
                            fontWeight="bold" 
                            fill="white" 
                            textAnchor="middle"
                            dominantBaseline="middle"
                            x={sll_node.ref_node_width/2}
                            y={sll_node.ref_node_height/2}
                    >
                        {data}
                    </text>
                </g>
                 <g transform={`translate(${sll_node.node_width/2 - sll_node.ref_node_width/2}, ${sll_node.node_height/2 + sll_node.ref_node_height/3})`}>
                    <rect
                        width={sll_node.ref_node_width}
                        height={sll_node.ref_node_height}
                        fill={sll_node.ref_node_bg}
                        rx={15}
                    />
                    <text   fontSize={sll_node.fontSize}
                            fontWeight="bold" 
                            fill="white" 
                            textAnchor="middle"
                            dominantBaseline="middle"
                            x={sll_node.ref_node_width/2}
                            y={sll_node.ref_node_height/2}
                    >
                        Next
                    </text>
                </g>
            </g>
    );
};

export default SinglyListNode;