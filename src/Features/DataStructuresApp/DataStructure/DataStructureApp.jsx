import { useCallback, useRef, useState } from "react";
import getInitalDs from "./GetInitialDs";
import { AnimatingContext } from "../../../context/animeContext/animatingContext";
import gsap from "gsap";
import OperationBar from "../../Control/Operation/OperationBar";
import colorway from "../../../assets/color-style/sllStyle";
import Message from "../../Message/Message";
import DataStructure from "./DataStructure";
import { ForwardContext, RevertContext} from "../../../context/stateButtonContext/StateButtonContext";


const DataStructureApp = ({name}) => {
    const animation_speed = useRef(1);
    const initalDataStructure = getInitalDs(name);

    const initialOperation = {
                                data_structure: initalDataStructure,
                                name: "None",
                                stateList: [initalDataStructure.clone()],
                                stateIndex: 0,
                                gsapTimeLine: gsap.timeline({
                                    defaults: {
                                        ease: "power1.inOut",
                                    }
                                }),
    };
    initialOperation.gsapTimeLine.timeScale(animation_speed.current);
    const [operation, setOperation] = useState(initialOperation);

    const handleStart = useCallback((state) => {
        const operationName = state.operationName;
        const newDataStructure = operation.data_structure.clone();
        let newStateList = operation.stateList;
        const newOperation = {
            // name of the operation
            name: operationName,
            // the data structure of this next state
            data_structure: newDataStructure,
            // list of state of the data structure through each operation
            stateList: newStateList,
            stateIndex: operation.stateIndex,
            // is the user want to use animation
            useAnime: state.butName !== "No Animation",
            // animation timeline for this operation
            gsapTimeLine: gsap.timeline({
                defaults: {
                    ease: "power1.inOut",
                }
            }),
            // the index where the operation happens
            index: state["index"],
            // the value user want to make operation on the data structure
            value: state["value"],
            
        };
        newOperation.gsapTimeLine.timeScale(animation_speed.current);
        let message = "";
        if (    operationName !== "forward" 
            &&  operationName !== "revert"
            &&  operationName !== "delete"
        ) {
            message = newDataStructure[operationName](state["value"], state["index"]);
        }
        else if (operationName === "revert") {
            newOperation.data_structure = operation.stateList[operation.stateIndex - 1].clone();
            newOperation.stateIndex--;
        }
        else if (operationName === "forward") {
            newOperation.data_structure = operation.stateList[operation.stateIndex + 1].clone();
            newOperation.stateIndex++;
        }
        

        newOperation.cleanAnime = () => {
            if (operationName === "delete")
                message = newDataStructure.delete(state["value"]);
            newStateList = newStateList.slice(0, operation.stateIndex + 1);
            newStateList.push(newDataStructure.clone());
            setOperation({
                data_structure: newOperation.data_structure.clone(),
                name: "None",
                stateList: newStateList,
                stateIndex: operation.stateIndex + 1,
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
        <div
            className="w-screen
                        h-screen 
                        flex 
                        justify-center 
                        items-start
                        "
            style={
                    {
                        backgroundColor: colorway[name]["BG"],
                        overflow: "scroll"
                    }
            }
        >
            <DataStructure operation={operation} name={name}/>
            <AnimatingContext
                            value={operation.name !== "None" 
                                    && operation.name !== "revert" 
                                    && operation.name !== "forward"}
            >
                <RevertContext value={operation.stateIndex === 0}>
                    <ForwardContext value={operation.stateIndex === operation.stateList.length - 1}>
                        <OperationBar
                            name={name}
                            onStart={handleStart}
                            timeLine={operation.gsapTimeLine}
                            animationSpeed={animation_speed}
                        />
                    </ForwardContext>
                </RevertContext>
            </AnimatingContext>
            {
                operation.message && (<Message message={operation.message} key={3}/>)
            }
        </div>
    );
};

export default DataStructureApp;