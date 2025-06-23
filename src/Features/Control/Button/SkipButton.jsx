import { useContext } from "react";
import { AnimatingContext } from "../../../context/animeContext/animatingContext";

const SkipButton = ({style, tl}) => {
    const isAnimating = useContext(AnimatingContext);
    
    return (
        <div className="relative">
            <button className="font-bold p-[0.5em] rounded-[0.5em] text-center relative z-20 self-end"
                    style={
                        {
                            backgroundColor: style["START_BUTTON_BG"],
                             transform: !isAnimating ? "translate(0, 0)" : "translate(0, -0.3em)"
                        }
                    }
                    onClick={() => tl.progress(1)}
                    disabled={!isAnimating}
            >
                Skip Animation
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

export default SkipButton