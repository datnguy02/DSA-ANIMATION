import BinarySearchTree from "../BinarySearchTree/BinarySearchTree";
import SingLyLinkedList from "../SinglyLinkedList/SinglyLinkedList";

const DataStructure = ({name, operation}) => {
    if (name === "singlylinkedlist") 
        return (<SingLyLinkedList operation={operation}/>);
    if (name === "binarysearchtree")
        return (<BinarySearchTree operation={operation}/>)
    

};

export default DataStructure;