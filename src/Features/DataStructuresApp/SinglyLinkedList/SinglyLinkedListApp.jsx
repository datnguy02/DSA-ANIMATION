import colorway from "../../../assets/color-style/sllStyle";
import { AnimatingContext } from "../../../context/animeContext/animatingContext";
import OperationBar from "../../Control/Operation/OperationBar";
import Message from "../../Message/Message";
import { LinkedList } from "./core/singlylinkedlist";
import SinglyLinkedList from "./SinglyLinkedList";
import { useCallback, useState } from "react";

const initialList = new LinkedList();
for (let i = 0; i < 4; i++) {
    initialList.insertFirst(Math.round((Math.random() * 10000) % 100));
}


const SinglyLinkedListApp = () => {
    const [operation, setOperation] = useState({
                                                list: initialList,
                                                name: "None",
                                                stackList: [],
                                        });
    
    // This function will be passed down to the operation bar
    const handleStart = useCallback((state) => {
        const operationName = state.operationName;
        const newList = operation.list.clone();
        const newStackList = operation.stackList;
        let message = "";
        newStackList.push(newList.clone());
        const newOperation = {
            name: operationName,
            list: newList,
            useAnime: state.butName !== "No Animation",
            stackList: newStackList,
        }
        if (operationName === "insert(i)") {
            newList.insertAt(state["value"], state["index"]);
            newOperation.insertAt = state["index"];
            message = `Successful insert ${state["value"]} at index ${state["index"]}`;
        }
        else if (operationName === "insertfirst") {
            newList.insertFirst(state["value"]);
            message = `Successful insert ${state["value"]} at the beginning of the list`;
        }
        else if (operationName === "insertlast") {
            newList.insertLast(state["value"]);
            message = `Successful insert ${state["value"]} at the end of the list`;
        }
        else if (operationName === "search") {
            newOperation.target = state["value"];
        }
        else if (operationName === "delete") {
            newOperation.target = state["value"];
        }
        else if (operationName === "revert") {
            newOperation.stackList.pop();
            newOperation.list = newOperation.stackList.pop().clone();
        }
        

        newOperation.cleanAnime = () => {
                if (operationName === "delete")
                    newList.delete(state["value"]);
                setOperation({
                    list: newOperation.list.clone(),
                    name: "None",
                    stackList: newStackList,
                    message: message,
                })
        };
        
        setOperation(newOperation);
        
    });
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
                <AnimatingContext value={operation.name !== "None"}>
                    <OperationBar
                        name="sll"
                        onStart={handleStart}
                    />
                </AnimatingContext>
                {
                    operation.message && (<Message message={operation.message} key={3}/>)
                }
            </div>
        </>

    );
};

export default SinglyLinkedListApp