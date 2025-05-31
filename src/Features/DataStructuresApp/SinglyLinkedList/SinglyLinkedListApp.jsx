import colorway from "../../../assets/color-style/sllStyle";
import OperationBar from "../../Control/Operation/OperationBar";
import { LinkedList } from "./core/singlylinkedlist";
import SinglyLinkedList from "./SinglyLinkedList";
import { useState } from "react";

const initialList = new LinkedList();
for (let i = 0; i < 5; i++) {
    initialList.insertFirst(Math.round((Math.random() * 10000) % 100));
}


const SinglyLinkedListApp = () => {
    const [operation, setOperation] = useState({
                                                list: initialList,
                                                operationName: "None"
                                                });

    const handleStart = (state) => {
        const operationName = state.operationName;
        if (operationName === "Insert(i)") {
            // TODO 
            operation.list.insertAt(state["value"], state["index"]),
            setOperation({
                list: operation.list,
                operationName: "insert(i)"
            });

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