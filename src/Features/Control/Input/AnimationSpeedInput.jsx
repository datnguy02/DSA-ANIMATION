import { useState } from "react";

const AnimationSpeedInput = ({tl, speedRef}) => {
    const [speed, setSpeed] = useState(speedRef.current);
    return (
        <label className="font-bold flex gap-[0.5em] self-center">
            Speed =
            <select  
                    className="bg-white text-black rounded-[0.1em] max-w-[5em] font-bold"
                    value={speed}
                    onChange={(e) => {
                        setSpeed(e.target.value);
                        tl.timeScale(e.target.value);
                        speedRef.current = e.target.value;
                    }}
            >
                <option value={0.25}>0.25x</option>
                <option value={0.5}>0.5x</option>
                <option value={1}>1x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
                <option value={2.5}>2.5x</option>
                <option value={3}>3x</option>
                <option value={3.5}>3.5x</option>
                <option value={4}>4x</option>
            </select>
        </label>
    );
};

export default AnimationSpeedInput;