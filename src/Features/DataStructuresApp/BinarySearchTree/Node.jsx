import { useEffect, useRef } from "react";
import NullNode from "./NullNode";
import RefNode from "./RefNode";


const Node = ({node}) => {
    const container = useRef(null);
    const domNode = useRef(null);
    const rightLine = useRef(null);
    const leftLine = useRef(null);
    const leftNull = useRef(null);
    const rightNull = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const leftNullContainer = useRef(null);
    const rightNullContainer = useRef(null);
    const text = useRef(null);
    const wrapper = useRef(null);
    const leftNullTtext = useRef(null);
    const rightNullText = useRef(null);
    const leftContainer = useRef(null);
    const rightContainer = useRef(null);
    

    useEffect(() => {
        node.text = text.current;
        node.domNode = domNode.current;
        node.wrapper = wrapper.current;
        node.leftContainer = leftContainer.current;
        node.rightContainer = rightContainer.current;
        node.leftRef = leftRef.current;
        node.rightRef = rightRef.current;


    }, [node])
    return (
        <g transform={`translate(${node.x}, ${node.y})`}
            className="transform-fill"
             transformOrigin="center"
             ref={container}
        >
            <g ref={wrapper} transform="scale(1)">
                <circle
                    fill={node.BG}
                    stroke={node.BORDER}
                    strokeWidth={node.STROKE_WIDTH}
                    r={node.RADIUS}
                    ref={domNode}
                />
                    <text  fontWeight="bold" 
                            y={0}
                            x={0}
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fill={node.TEXT}
                            fontSize={node.TEXT_SIZE}
                            ref={text}
                    >
                        {node.value}
                    </text>
            </g>
            <RefNode node={node} isLeft={true} line={leftLine} reference={leftRef}/>
            <RefNode node={node} isLeft={false} line={rightLine} reference={rightRef}/>
            <NullNode 
                    node={node} 
                    isLeft={true} 
                    text={leftNullTtext} 
                    domNull={leftNull} 
                    container={leftNullContainer}
            />
            <NullNode 
                    node={node} 
                    isLeft={false} 
                    text={rightNullText} 
                    domNull={rightNull} 
                    container={rightNullContainer}
            />
        </g>);

};

export default Node