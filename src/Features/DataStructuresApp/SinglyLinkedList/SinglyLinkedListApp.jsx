import colorway from "../../../assets/color-style/sllStyle";
import OperationBar from "../../Control/Operation/OperationBar";
import { LinkedList } from "./core/singlylinkedlist";
import SinglyLinkedList from "./SinglyLinkedList";
import { useState } from "react";

const initialList = new LinkedList();
for (let i = 0; i < 3; i++) {
    initialList.insertFirst(Math.round((Math.random() * 10000) % 100));
}


const SinglyLinkedListApp = () => {
    const [operation, setOperation] = useState({
                                                list: initialList,
                                                name: "None"
                                                });


    // This function will be passed down to the operation bar
    const handleStart = (state) => {
        const operationName = state.operationName;
        const newList = operation.list.clone();
        const newOperation = {
            name: operationName,
            list: newList,
        }
        if (operationName === "insert(i)") {
            newList.insertAt(state["value"], state["index"]);
        }
        else if (operationName === "insertfirst") {
            newList.insertFirst(state["value"]);
        }
        else if (operationName === "insertlast") {
            newList.insertLast(state["value"]);
        }
        else if (operationName === "search") {
            newOperation.target = state["value"];
        }

        newOperation.cleanAnime = () => {
                setOperation({
                    list: newList.clone(),
                    name: "None"
                })
        }
        

        setOperation(newOperation);
        
    }
    return (
        <>
            <div    
                className=" w-screen 
                            h-screen 
                            flex 
                            justify-center 
                            items-start
                "
                style={
                    {
                        backgroundColor: colorway["BG"]
                    }
                }
            >
                <SinglyLinkedList
                    operation={operation}
                />
                <OperationBar
                    name="sll"
                    onStart={handleStart}
                />
            </div>
        </>

    );
};

export default SinglyLinkedListApp