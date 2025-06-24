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
                            
                        }
                    }
                    onClick={() => tl.progress(1)}
                    disabled={!isAnimating}
            >
                Skip Animation
            </button>
        </div>
    );
};

export default SkipButton