import { useEffect, useRef } from "react";

const Traveler = ({name, node, visible}) => {
    const domNodeContainer = useRef(null);
    const domTextNode = useRef(null);
    const domNode = useRef(null);
    const line = useRef(null);
    const wrapper = useRef(null);

    useEffect(() => {
        node.nodeContainer = domNodeContainer.current;
        node.domNode = domNode.current;
        node.textNode = domTextNode.current;
        node.connectLine = line.current;
        node.wrapper = wrapper.current;

        return () => { 
            node.nodeContainer = null;
            node.domNode = null;
            node.textNode = null;
            node.connectLine = null;
        }
    }, [visible, node]);

    return (
            <g transform={`translate(${node.startX}, ${node.startY})`}
                opacity={visible ? 1 : 0}
                ref={domNodeContainer}
            >
                <g 
                    ref={wrapper}
                    transformOrigin={`${node.WIDTH/2} ${node.HEIGHT}`}
                    className="transform-fill"
                >
                     <rect height={node.HEIGHT} width={node.WIDTH} fill={node.BG}
                    stroke={node.STROKE}
                    rx={node.ROUND}
                    strokeWidth={node.STROKE_WIDTH}
                    ref={domNode}
                />
                <text
                    fill={node.TEXT}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    x={node.WIDTH/2}
                    y={node.HEIGHT/2}
                    fontWeight="bold"
                    fontSize={25}
                    ref={domTextNode}
                >
                    {name}
                </text>

                </g>
                <path
                    d={node.getLineAttr(0, 0)}
                    stroke={node.STROKE}
                    strokeWidth={node.STROKE_WIDTH}
                    strokeLinecap="round"
                    ref={line}
                />
            </g>
    );
};

export default Traveler