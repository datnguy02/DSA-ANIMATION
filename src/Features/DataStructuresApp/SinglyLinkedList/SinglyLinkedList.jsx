import Node from "./Node";
import RefNode from "./RefNode.jsx"
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
            viewBox="0 0 2800 1100" 
            width={1600}
            height={900}    
            preserveAspectRatio="xMidYMid meet"

        >
            <g
                 transform={`translate(${list.x}, ${list.y})`}
            >
                <rect
                    width={list.head.WIDTH}
                    height={list.head.HEIGHT}
                    fill={list.head.BG}
                    rx={list.head.BORDER_RAD}
                    stroke={list.head.STROKE}
                    strokeWidth={list.head.STROKE_WIDTH}
                />
                <RefNode
                    name="Head"
                    isTop={true}
                    node={list.head}
                />
                <RefNode
                    name="Tail"
                    isTop={false}
                    node={list.head}
                />
            </g>
            {nodeList}    
        </svg>
    );
};

export default SinglyLinkedList