import Node from "./Node";
import HeadRef from "./HeadRef";
import TailRef from "./TailRef";

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