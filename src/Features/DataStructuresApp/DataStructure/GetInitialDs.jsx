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
        tree.insert(30);
        tree.insert(20);
        tree.insert(40);
        tree.insert(18);
        tree.insert(13);
        tree.insert(2);
        tree.insert(100);
        tree.insert(45);
        tree.insert(43);
        tree.insert(33);
        tree.insert(38);
        tree.insert(44);
        tree.insert(70);
        tree.insert(60)
        dataStructure = tree;
    }
    return dataStructure;
};

export default getInitalDs