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
        tree.insert(10);
        tree.insert(25);
        tree.insert(35);
        tree.insert(50);
        tree.insert(5);
        tree.insert(8);
        tree.insert(23);
        tree.insert(28);
        tree.insert(15);
        tree.insert(18);
        tree.insert(13);
        tree.insert(2);
        tree.insert(100);
        tree.insert(45);
        tree.insert(43);
        tree.insert(48);
        tree.insert(75);
        tree.insert(200);
        tree.insert(33);
        tree.insert(38);


        dataStructure = tree;
    }
    return dataStructure;
};

export default getInitalDs