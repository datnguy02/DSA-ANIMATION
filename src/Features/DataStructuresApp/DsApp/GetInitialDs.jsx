import { LinkedList } from "../SinglyLinkedList/core/singlylinkedlist";

const getInitalDs = (name) => {
    let dataStructure = null;
    if (name === "singlylinkedlist") {
        let list = new LinkedList();
        for (let i = 0; i < 4; i++) {
            list.insertfirst(Math.round((Math.random() * 10000) % 100));
        }
        dataStructure = list;
    }
    return dataStructure;
};

export default getInitalDs