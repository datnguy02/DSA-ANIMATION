import { bst_node } from "../../UI/style";
import { useRef, useEffect } from "react";
import { gsap } from "gsap/gsap-core";

const BstNode = ({data, x, y, animeDuration, moveAmount, angle}) => {
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
    }, []);

    return (
        <g transform={`translate(${x}, ${y}) rotate(${angle})`} 
            ref={node}
            className="transform-fill"
            transformOrigin="center"
        >
            <circle
              r={bst_node.node_radius}  
              fill={bst_node.node_bg}
              stroke={bst_node.node_stroke}
              strokeWidth={bst_node.node_stroke_width}
            />
            <text
                textAnchor="middle"   
                dominantBaseline="middle"
                fill={bst_node.node_text} 
                fontSize={bst_node.fontSize}
                fontWeight="bold"
            >
                {data}
            </text>
            <g 
                transform={`translate(${bst_node.node_radius/2}, ${bst_node.node_radius/3}) rotate(-60)`}
                transformOrigin={`${bst_node.ref_node_width/2} 0`}
            >
                <rect
                    fill={bst_node.ref_node_bg}
                    stroke={bst_node.node_stroke}
                    width={bst_node.ref_node_width}
                    height={bst_node.ref_node_height}
                    rx={bst_node.node_rounded}
                    strokeWidth={bst_node.ref_node_stroke_width}
                />
                <text 
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={bst_node.fontSize}
                    fontWeight="bold"
                    fill={bst_node.ref_node_text}
                    x={bst_node.ref_node_width/2}
                    y={bst_node.ref_node_height/2}
                >
                    R
                </text>
            </g>
            <g 
                transform={`translate(${-bst_node.ref_node_width*1.1}, ${-15}) rotate(60)`}
                 transformOrigin={`-${bst_node.ref_node_width/2} 0`}
            >
                <rect
                    fill={bst_node.ref_node_bg}
                    stroke={bst_node.node_stroke}
                    width={bst_node.ref_node_width}
                    height={bst_node.ref_node_height}
                    rx={bst_node.node_rounded}
                    strokeWidth={bst_node.ref_node_stroke_width}
                />
                <text 
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={bst_node.fontSize}
                    fontWeight="bold"
                    fill={bst_node.ref_node_text}
                    x={bst_node.ref_node_width/2}
                    y={bst_node.ref_node_height/2}
                >
                    L
                </text>
            </g>
        </g>
    );
};

export default BstNode