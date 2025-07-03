import { Tree } from "../BinarySearchTree/core/Tree";
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
    if (name === "binarysearchtree") {
        let tree = new Tree();
        tree.insert(100);
        tree.insert(50);
        tree.insert(150);
        tree.insert(75);
        tree.insert(200);
        tree.insert(25);
        tree.insert(125);
        
        dataStructure = tree;
    }
    return dataStructure;
};

export default getInitalDs