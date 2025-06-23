import colorway from "../../../assets/color-style/sllStyle";
import { AnimatingContext } from "../../../context/animeContext/animatingContext";
import OperationBar from "../../Control/Operation/OperationBar";
import Message from "../../Message/Message";
import { LinkedList } from "./core/singlylinkedlist";
import SinglyLinkedList from "./SinglyLinkedList";
import { useCallback, useRef, useState } from "react";
import gsap from "gsap";

const initialList = new LinkedList();
for (let i = 0; i < 4; i++) {
    initialList.insertFirst(Math.round((Math.random() * 10000) % 100));
}


const SinglyLinkedListApp = () => {
    const animation_speed = useRef(1);
    const initialOperation = {
                                list: initialList,
                                name: "None",
                                stateList: [],
                                gsapTimeLine: gsap.timeline({
                                                            defaults: {
                                                                ease: "power1.inOut",
                                                            }
                                                            }),
                                };
    initialOperation.gsapTimeLine.timeScale(animation_speed.current);
    const [operation, setOperation] = useState(initialOperation);

    
    // This function will be passed down to the operation bar
    const handleStart = useCallback((state) => {
        const operationName = state.operationName;
        const newList = operation.list.clone();
        const newStateList = operation.stateList;
        let message = "";
        newStateList.push(newList.clone());
        const newOperation = {
            name: operationName,
            list: newList,
            useAnime: state.butName !== "No Animation",
            stateList: newStateList,
            gsapTimeLine: gsap.timeline({
                defaults: {
                    ease: "power1.inOut"
                },
            }),
        };
        newOperation.gsapTimeLine.timeScale(animation_speed.current);
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
            const {index} = operation.list.search(state["value"]);
            message = index >= 0 ? `Found ${state["value"]} at index ${index}` : `It looks like ${state["value"]} is not in the list`;
        }
        else if (operationName === "delete") {
            newOperation.target = state["value"];
            const {index} = operation.list.search(state["value"]);
            message = index >= 0 ? `Successful delete ${state["value"]}` : `It looks like ${state["value"]} is not in the list to be deleted`;
        }
        else if (operationName === "revert") {
            newOperation.stateList.pop();
            newOperation.list = newOperation.stateList.pop().clone();
        }
        else if (operationName === "forward") {
            console.log("click!!!");
        }
        

        newOperation.cleanAnime = () => {
                if (operationName === "delete")
                    newList.delete(state["value"]);
                setOperation({
                    list: newOperation.list.clone(),
                    name: "None",
                    stateList: newStateList,
                    message: message,
                    gsapTimeLine: gsap.timeline({
                        defaults: {
                            ease: "power1.inOut"
                        },
                    }),
                });
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
                        timeLine={operation.gsapTimeLine}
                        animationSpeed={animation_speed}
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