import { useEffect, useRef } from "react";

const Traveler = ({tree, traveler, name}) => {
    const node = useRef(null);
    const container = useRef(null);
    const line = useRef(null);
    const text = useRef(null);
    const wrapper = useRef(null);

    useEffect(() => {
        traveler.node = node.current;
        traveler.container = container.current;
        traveler.line = line.current;
        traveler.text = text.current;
        traveler.wrapper = wrapper.current;

    }, [traveler]);
    return (
        <g  transform={`translate(${traveler.x}, ${traveler.y})`}
            ref={container}
            className="transform-fill"
            
        >
            <path
                strokeWidth={traveler.LINE_THICKNESS}
                stroke={traveler.STROKE}
                d={traveler.getInitialLineAttr()}
                fill="none"
                ref={line}
            />
            <g ref={wrapper} transform="scale(1)">
                <rect
                width={traveler.WIDTH}
                height={traveler.HEIGHT}
                rx={traveler.ROUND}
                fill={traveler.BG}
                stroke={traveler.STROKE}
                strokeWidth={traveler.STROKE_WIDTH}
                ref={node}
                />
                <text
                    textAnchor="middle"
                    dominantBaseline="middle"
                    x={traveler.WIDTH/2}
                    y={traveler.HEIGHT/2}
                    fill={traveler.TEXT}
                    fontWeight="bold"
                    fontSize={traveler.TEXT_SIZE}
                    ref={text}
                >
                    {name}
                </text>
            </g>
        </g>
    );

};

export default Traveler;