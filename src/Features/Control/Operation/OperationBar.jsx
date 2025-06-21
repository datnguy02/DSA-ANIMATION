import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Method from "./Method";
import operation_bar from "../../../assets/MethodList/operationList";
import TimeButton from "../Button/TimeButton";


const OperationBar = ({name, onStart}) => {
    const style = operation_bar[name].style;
    const container = useRef(null);
    const bar = useRef(null);
    const {contextSafe} = useGSAP({scope: container});
    let closed = false;

    const handleClick = contextSafe(() => {
        if (!closed) {
            closed = true
            gsap.to(bar.current, {
                scale: 0,
                transformOrigin: "bottom left",
                ease: "power4.out"
            });
        }
        else {
            closed = false;
             gsap.to(bar.current, {
                scale: 1,
                transformOrigin: "bottom left",
                ease: "power4.out"
            });
        }
    });

    return (
        <div className="fixed left-5 bottom-6 lg:text-[0.8rem] sm:text-[0.6rem] text-[0.5rem]" ref={container}>
            <div
                className="
                            flex
                            flex-col
                            gap-[0.5rem]
                            p-[1em]
                            pb-[4em]
                            rounded-[0.8em]
                            "
                style={
                    {
                        backgroundColor: style.BG,
                        color: style.TEXT,
                        border: `0.2em solid ${style["START_BUTTON_BG"]}`
                    }
                }
                ref={bar}
            >
                {operation_bar[name].methods.map(method => (
                                                <Method 
                                                    name={method.name}
                                                    inputList={method.inputList}
                                                    methodStyle={style}
                                                    handleStart={onStart}
                                                />
                                                ))
                }
                <TimeButton
                    style={style}
                    handleClick={onStart}
                    isBack={true}
                />
            </div>
            <div
                    className=" 
                                p-[1.5em]
                                absolute 
                                bottom-0 
                                left-0
                                rounded-[0.2em]
                            "   
                    style={
                        {
                            backgroundColor: style["START_BUTTON_BG"]
                        }
                    }
                    onClick={handleClick}
            ></div>
        </div>
    );
};

export default OperationBar