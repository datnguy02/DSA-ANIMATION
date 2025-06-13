import { useContext } from "react";
import { AnimatingContext } from "../../../context/animeContext/animatingContext";

const ControlButton = ({name, style, onStart, inputNameList, inputValList, methodName}) => {
    const isAnimating = useContext(AnimatingContext);
    return (
        <div>
            <button className="font-bold p-[0.5em] rounded-[0.5em] text-center"
                    style={
                        {
                            backgroundColor: style["START_BUTTON_BG"]
                        }
                    }
                    onClick={() => {
                        let state = {
                            operationName: methodName.toLowerCase(),
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