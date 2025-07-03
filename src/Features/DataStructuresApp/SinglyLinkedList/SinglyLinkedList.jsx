import Node from "./Node";
import HeadRef from "./HeadRef";
import TailRef from "./TailRef";
import Traveler from "./Traveler";

import { useEffect, useRef } from "react";
import { insertFirstAnimation } from "../../Animation/sll/insertFirstAnimation";
import { HeadLineContext, HeadRefContext, HeadRefTextContext, TailLineXContext, TailLineYContext, TailRefContext, TailRefTextContext } from "../../../context/sll/headRefContext";
import { insertLastAnimation } from "../../Animation/sll/insertLastAnimation";
import { TravelNode } from "./core/TravelNode";
import { searchAnimation } from "../../Animation/sll/searchAnimation";
import { deleteAnimation } from "../../Animation/sll/deleteAnimation";
import { insertAtAnimation } from "../../Animation/sll/insertAtAnimation";

import colorway from "../../../assets/color-style/sllStyle";


const getNodeList = (list) => {
    let current = list.head;
    const res = [];
    while (current != null) {
        res.push(<Node
                    node={current}
                    key={current.id}
                />);
        current = current.next;
    }
    return res;
}

const SinglyLinkedList = ({operation}) => {
    const operationName = operation.name;
    const list = operation.data_structure;
    const nodeList = getNodeList(list);
    const tl = useRef(null);
    const domHead = useRef(null);
    const domTail = useRef(null);
    const domTailLineX = useRef(null);
    const domTailLineY = useRef(null);
    const domHeadLine = useRef(null);
    const domHeadText = useRef(null);
    const domTailText = useRef(null);
    const domVirtualHeadLine = useRef(null);
    const domVirtualTailLineY = useRef(null);
    const currentNode = new TravelNode(
                                        list, 
                                        colorway.singlylinkedlist["CURRENT_TEXT"], 
                                        colorway.singlylinkedlist["CURRENT_STROKE"],
                                        colorway.singlylinkedlist["CURRENT_BG"]);
    const prevNode= new TravelNode(
                                    list,
                                    colorway.singlylinkedlist["PREV_TEXT"],
                                    colorway.singlylinkedlist["PREV_STROKE"],
                                    colorway.singlylinkedlist["PREV_BG"]
    );

    useEffect(() => {
        list.headRef = domHead.current;
        list.tailRef = domTail.current;
        list.headLine = domHeadLine.current;
        list.tailLineX = domTailLineX.current;
        list.tailLineY = domTailLineY.current;
        list.headRefText = domHeadText.current;
        list.tailRefText = domTailText.current;
        list.virtualHeadLine = domVirtualHeadLine.current;
        list.virtualTailLineY = domVirtualTailLineY.current;

        const noAnimationOperations = ["None", "revert", "forward"];
        
        if (!noAnimationOperations.includes(operationName)) {
            tl.current = operation.gsapTimeLine;
        }

        
        if (operation.useAnime) {
            if (operationName === "insertfirst") {
                insertFirstAnimation(tl.current, list);
            }
            if (operationName === "insertlast") {
                insertLastAnimation(tl.current, list);
            }
            if (operationName === "search") {
                searchAnimation(tl.current, list, operation.value, currentNode);
            }
            if (operationName === "delete") {
                deleteAnimation(tl.current, list, operation.value, prevNode, currentNode);
            }
            if (operationName === "insertat") {
                insertAtAnimation(tl.current, list, operation.index, prevNode, currentNode);
            }
        }
        
        if (!noAnimationOperations.includes(operationName)) {
            tl.current.to(list.headRef, {
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
            // list.headRef = null;
            // list.tailRef = null;
            // list.headLine = null;
            // list.tailLineX = null;
            // list.tailLineY = null;
            // list.headRefText = null;
            // list.tailRefText = null;
            // list.virtualHeadLine = null;
            // list.virtualTailLineY = null;
        }
    }, [operation])
   

    return (
        <svg 
            viewBox="-200 0 4500 1500"
            width={3000}
            height={800} 
        >
                <g
                    transform={`translate(${list.x}, ${list.y})`}
                >
                            <rect
                                width={list.WIDTH}
                                height={list.HEIGHT}
                                fill={list.BG}
                                stroke={list.STROKE}
                                strokeWidth={list.STROKE_WIDTH}
                                rx={list.ROUNDED}
                            />
                            <HeadRefContext value={domHead}>
                                <HeadLineContext value={domHeadLine}>
                                    <HeadRefTextContext value={domHeadText}>
                                        <HeadRef
                                            list={list}
                                            domVirtualHeadLine={domVirtualHeadLine}
                                        />
                                    </HeadRefTextContext>
                                </HeadLineContext>
                            </HeadRefContext>

                            <TailRefContext value={domTail}>
                                <TailRefTextContext value={domTailText}>
                                    <TailLineXContext value={domTailLineX}>
                                        <TailLineYContext value={domTailLineY}>
                                             <TailRef
                                                list={list}
                                                domVirtualTailLineY={domVirtualTailLineY}
                                            />
                                        </TailLineYContext>
                                    </TailLineXContext>
                                </TailRefTextContext>
                            </TailRefContext>
                </g>
                <Traveler
                    name="Current"
                    list={list}
                    node={currentNode}
                />
                <Traveler
                    name="Previous"
                    list={list}
                    node={prevNode}
                />
                {nodeList}    
        </svg>
    );
};

export default SinglyLinkedList