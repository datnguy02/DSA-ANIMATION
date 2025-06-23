import { useContext } from "react";
import { AnimatingContext } from "../../../context/animeContext/animatingContext";

const StateButton = ({handleClick, style, isBack}) => {
    const isAnimating = useContext(AnimatingContext);
    return (
            <div className="relative"
            >
                <div className="absolute h-full w-full top-0 rounded-[0.5em] opacity-[0.5]"
                    style={
                        {
                            backgroundColor: style["START_BUTTON_BG"],
                        }
                    }
                ></div>
                <button 
                    className="rounded-[0.5em] relative p-[0.3em]"
                     style={
                        {
                            backgroundColor: style["START_BUTTON_BG"],
                            transform: isAnimating ? "translate(0, 0)" : "translate(0, -0.3em)"
                        }
                     }
                    onClick={() => {
                        let state = {
                            operationName: isBack ? "revert" : "forward",
                        };
                        handleClick(state);
                    }}
                    disabled={isAnimating}
                >
                    {isBack ? 
                        (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-[2em]">
                            <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>) 
                        : 
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-[2em]">
                                <path fillRule="evenodd" d="M14.47 2.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H9a5.25 5.25 0 1 0 0 10.5h3a.75.75 0 0 1 0 1.5H9a6.75 6.75 0 0 1 0-13.5h10.19l-4.72-4.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        )
                    }
                </button>
            </div>
    );
};

export default StateButton