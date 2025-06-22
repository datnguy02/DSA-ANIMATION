import { useContext } from "react";
import { AnimatingContext } from "../../../context/animeContext/animatingContext";

const ControlButton = ({name, style, onStart, inputNameList, inputValList, methodName}) => {
    const isAnimating = useContext(AnimatingContext);
    
    return (
        <div className="relative">
            <button className="font-bold p-[0.5em] rounded-[0.5em] text-center relative z-20 whitespace-nowrap"
                    style={
                        {
                            backgroundColor: style["START_BUTTON_BG"],
                            transform: isAnimating ? "translate(0, 0)" : "translate(0, -0.3em)"
                        }
                    }
                    onClick={() => {
                        let state = {
                            operationName: methodName.toLowerCase(),
                            butName: name,
                        };
                        let n = inputNameList.length;
                        for (let i = 0; i < n; i++) {
                            state[inputNameList[i].toLowerCase()] = +inputValList[i];
                        }

                        onStart(state);
        
                    }}
                    disabled={isAnimating}
            >
                {name}
            </button>
            <div className="w-full h-full absolute rounded-[0.5em] top-0 z-10 opacity-[0.5]"
                style={
                    {
                        backgroundColor: style["START_BUTTON_BG"]
                    }
                }
            ></div>
        </div>
    );
};

export default ControlButton