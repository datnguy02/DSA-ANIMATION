import Node from "./Node";
import HeadRef from "./HeadRef";
import TailRef from "./TailRef";
import gsap from "gsap/gsap-core";
import { useEffect, useRef } from "react";
import { insertFirstAnimation } from "../../Animation/sll/insertAnimation";

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
    const operationName = operation.name;
    const list = operation.list;
    const nodeList = getNodeList(list);
    const tl = useRef(null);
    const domHead = useRef(null);
    const domTail = useRef(null);
    const domTailLineX = useRef(null);
    const domTailLineY = useRef(null);
    const domHeadLine = useRef(null);

    useEffect(() => {
        list.headRef = domHead.current;
        list.tailRef = domTail.current;
        list.headLine = domHeadLine.current;
        list.tailLineX = domTailLineX.current;
        list.tailLineY = domTailLineY.current;

        tl.current = gsap.timeline({
            defaults: {
                duration: 0.5,
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
                <HeadRef
                    list={list}
                />
                <TailRef
                    list={list}
                />
            </g>
            {nodeList}    
        </svg>
    );
};

export default SinglyLinkedList