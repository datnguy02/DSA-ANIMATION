import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Method from "./Method";
import operation_bar from "../../../assets/MethodList/operationList";
import IconButton from "../Button/StateButton";
import SkipButton from "../Button/SkipButton";
import TimeButton from "../Button/TimeButton";
import StateButton from "../Button/StateButton";


const OperationBar = ({name, onStart, timeLine}) => {
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
        <div className="fixed left-5 bottom-6 lg:text-[0.8rem] sm:text-[0.3rem] text-[0.3rem] xl:text-[1rem]" ref={container}>
            <div
                className="
                            flex
                            flex-col
                            gap-[0.7rem]
                            p-[1em]
                            rounded-[0.8em]
                            content-center
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
                <div className="flex self-end gap-[1em] align-center">
                     <StateButton
                        handleClick={onStart}
                        isBack={true}
                        style={style}
                    />
                    <StateButton
                        handleClick={onStart}
                        isBack={false}
                        style={style}
                    />
                    <SkipButton
                        style={style}
                        tl={timeLine}
                    />
                    <TimeButton
                        tl={timeLine}
                    />
                </div>
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