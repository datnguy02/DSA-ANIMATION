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
    const leftNullText = useRef(null);
    const rightNullText = useRef(null);
    const leftContainer = useRef(null);
    const rightContainer = useRef(null);
    const leftText = useRef(null);
    const rightText = useRef(null);
    const rightWrapper = useRef(null);
    const leftWrapper = useRef(null);
    const virtualRightLine = useRef(null);
    const virtualLeftLine = useRef(null);
    const leftNullWrapper = useRef(null);
    const rightNullWrapper = useRef(null);
    

    useEffect(() => {
        node.text = text.current;
        node.domNode = domNode.current;
        node.wrapper = wrapper.current;
        node.leftContainer = leftContainer.current;
        node.rightContainer = rightContainer.current;
        node.leftRef = leftRef.current;
        node.leftText = leftText.current;
        node.container = container.current;

        node.rightRef = rightRef.current;
        node.rightText = rightText.current;
        node.rightWrapper = rightWrapper.current;
        node.leftWrapper = leftWrapper.current;

        node.virtualLeftLine = virtualLeftLine.current;
        node.virtualRightLine = virtualRightLine.current;
        
        node.leftNullWrapper = leftNullWrapper.current;
        node.rightNullWrapper = rightNullWrapper.current;

        node.leftNullText = leftNullText.current;
        node.rightNullText = rightNullText.current;

        node.leftNull = leftNull.current;
        node.rightNull = rightNull.current;
        


        return () => {
            node.text = null;
            node.domNode = null;
            node.wrapper = null;
            node.leftContainer = null;
            node.rightContainer = null;
            node.leftRef = null;
            node.leftText = null;
            node.rightRef = null;
            node.rightText = null;
            node.rightWrapper = null;
            node.leftWrapper = null;
            node.rightNullWrapper = null;
            node.leftNullWrapper = null;
            node.leftNullTtext = null;
            node.rightNullText = null;
            node.container = null;
        }


    }, [node])
    return (
        <g   transform={`translate(${node.x}, ${node.y})`}
             className="transform-fill"
             transformOrigin="center"
             ref={container}
             opacity={1}
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
            <RefNode 
                node={node} 
                isLeft={true} 
                line={leftLine} 
                reference={leftRef}
                container={leftContainer}
                refText={leftText}
                wrapper={leftWrapper}
                virtualLine={virtualLeftLine}
                
            />
            <RefNode 
                node={node} 
                isLeft={false} 
                line={rightLine} 
                reference={rightRef}
                container={rightContainer}
                refText={rightText}
                wrapper={rightWrapper}
                virtualLine={virtualRightLine}
            />
            <NullNode 
                    node={node} 
                    isLeft={true} 
                    text={leftNullText} 
                    domNull={leftNull} 
                    container={leftNullContainer}
                    wrapper={leftNullWrapper}
            />
            <NullNode 
                    node={node} 
                    isLeft={false} 
                    text={rightNullText} 
                    domNull={rightNull} 
                    container={rightNullContainer}
                    wrapper={rightNullWrapper}
            />
        </g>);

};

export default Node