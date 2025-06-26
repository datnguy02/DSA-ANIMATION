import SingLyLinkedList from "../SinglyLinkedList/SinglyLinkedList";

const DataStructure = ({name, operation}) => {
    if (name === "singlylinkedlist") {
        return (<SingLyLinkedList operation={operation}/>);
    }

};

export default DataStructure;