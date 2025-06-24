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
                            opacity: isAnimating ? 0.8 : 1,
                            pointerEvents: isAnimating ? "None" : "all"
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
        </div>
    );
};

export default ControlButton