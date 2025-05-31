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
        if (operationName === "insert(i)") {
            newList.insertAt(state["value"], state["index"]);
            setOperation({
                list: newList,
                name: "insert(i)"
            });
        }
        else if (operationName === "insertfirst") {
            newList.insertAt(state["value"], 0);
            setOperation({
                list: newList,
                name: "insertfirst",
            })
        }
        
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