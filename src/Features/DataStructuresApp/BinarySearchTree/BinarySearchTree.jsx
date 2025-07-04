import { useEffect, useRef } from "react";
import Traveler from "./Traveler";
import searchAnimation from "../../Animation/bst/searchAnimation";
import { TravelNode } from "./core/TravelNode";
import gsap from "gsap/all";
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

const BinarySearchTree = ({operation}) => {
    const tree = operation.data_structure;
    const operationName = operation.name;
    const traveler = new TravelNode(tree);
    const tl = useRef(null);
    const container = useRef(null);
    const domRoot = useRef(null);
    const text = useRef(null);
    const rootLine = useRef(null);
    const virtualRootLine = useRef(null);
    const svg = useRef(null);

    useEffect(() => {
        tree.container = container.current;
        tree.domRoot = domRoot.current;
        tree.text = text.current;
        tree.rootLine = rootLine.current;
        tree.virtualRootLine = virtualRootLine.current;
        
        Draggable.create(svg.current);

        const noAnimationOperations = ["None", "revert", "forward"];
        if (!noAnimationOperations.includes(operationName))
            tl.current = operation.gsapTimeLine;
        if (operation.useAnime) {
            if (operationName === "search")
                searchAnimation(tl.current, tree, traveler,operation.value);
        }
        
        if (!noAnimationOperations.includes(operationName)) {
            // REMEMBER TO UNCOMMENT WHEN DONE
            tl.current.to("div", {
                duration: 0,
                onComplete: () => {
                        if (operation.cleanAnime)
                            operation.cleanAnime()
                    }
                });
        }

        return () => {
            if (tl.current) {
                tl.current.revert();
                tl.current = null;
            }

            tree.container = null;
            tree.domRoot = null;
            tree.text = null;
            tree.rootLine = null;
            tree.virtualRootLine = null;
            
        }

    }, [operation])
    
    return (<svg viewBox="-400 300 5200 1500" 
                width={3000}
                height={800}
            >
                <g ref={svg}>
                    {operationName === "search" && <Traveler tree={tree} name="Current" traveler={traveler}/>}
                    <g transform={`translate(${tree.root_x}, ${tree.root_y})`}
                        ref={container}
                    >
                        <path
                            d={`M${tree.WIDTH/2} ${tree.HEIGHT}  L${tree.WIDTH/2} ${tree.HEIGHT + tree.ROOT_LINE_WIDTH}`}
                            strokeWidth={tree.LINE_THICKNESS}
                            stroke={tree.STROKE}
                            fill="none"
                            ref={rootLine}
                        />
                        <path
                            d={`M${tree.WIDTH/2} ${tree.HEIGHT}  L${tree.WIDTH/2} ${tree.HEIGHT}`}
                            strokeWidth={tree.TRAVEL_LINE_THICKNESS}
                            ref={virtualRootLine}
                        />
                        <rect
                            width={tree.WIDTH}
                            height={tree.HEIGHT}
                            rx={tree.ROUND}
                            stroke={tree.STROKE}
                            strokeWidth={tree.STROKE_WIDTH}
                            fill={tree.BG}
                            ref={domRoot}
                        />
                        <text
                            textAnchor="middle"
                            dominantBaseline="middle"
                            x={tree.WIDTH/2}
                            y={tree.HEIGHT/2}
                            fontWeight="bold"
                            fill={tree.TEXT}
                            fontSize={tree.root.TEXT_SIZE}
                            ref={text}
                        >
                            ROOT
                        </text>
                        
                    </g>
                    {tree.getJSXs()}
                </g>
            </svg>);
};

export default BinarySearchTree;