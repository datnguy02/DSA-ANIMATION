import Node from "./Node";
import HeadRef from "./HeadRef";
import TailRef from "./TailRef";
import gsap from "gsap/gsap-core";
import { useEffect, useRef } from "react";
import { insertFirstAnimation } from "../../Animation/sll/insertAnimation";
import { HeadLineContext, HeadRefContext, HeadRefTextContext, TailLineXContext, TailLineYContext, TailRefContext, TailRefTextContext } from "../../../context/sll/headRefContext";

const getNodeList = (list) => {
    let current = list.head;
    const res = [];
    while (current != null) {
        res.push(<Node
                    node={current}
                />);
        current = current.next;
    }
    return res;
}

const SinglyLinkedList = ({operation}) => {
    const ANIME_DURATION = 0.6;

    const operationName = operation.name;
    const list = operation.list;
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

    useEffect(() => {
        list.headRef = domHead.current;
        list.tailRef = domTail.current;
        list.headLine = domHeadLine.current;
        list.tailLineX = domTailLineX.current;
        list.tailLineY = domTailLineY.current;
        list.headRefText = domHeadText.current;
        list.tailRefText = domTailText.current;
        list.virtualHeadLine = domVirtualHeadLine.current;

        tl.current = gsap.timeline({
            defaults: {
                duration: ANIME_DURATION,
            }
        });

        if (operationName === "insertfirst") {
            insertFirstAnimation(tl.current, list);
        }

        return () => {
            if (tl.current) {
                tl.current.revert();
            }
        }
    }, [operation])
   

    return (
        <svg 
            viewBox="0 0 1800 1800" 
            width={1300}
            height={700}    
            preserveAspectRatio="xMidYMid meet"
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
                                            />
                                        </TailLineYContext>
                                    </TailLineXContext>
                                </TailRefTextContext>
                            </TailRefContext>
                </g>
                {nodeList}    
        </svg>
    );
};

export default SinglyLinkedList