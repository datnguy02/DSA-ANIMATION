import { useState } from "react";
import ControlButton from "../Button/ControlButton";
import UserInput from "../Input/UserInput";

const Method = ({name, inputList, methodStyle, handleStart}) => {
    const [inputValueList, setInputValueList] = useState(new Array(inputList.length).fill(""));

    const handleInputChange = (newValue, index) => {
        setInputValueList(inputValueList.map((val, i) => {
            if (i === index) 
                return newValue
            return val;
        }));
    }
    return (
        <div className="flex gap-[1rem] items-center">
            <button className="font-bold p-[0.5em] rounded-[0.2em] text-center min-w-20"
                    style={
                        {
                            backgroundColor: methodStyle["METHOD_BUTTON_BG"]
                        }
                    }
            >
                {name}
            </button>
            {inputList.map((input_name, index) => 
                (<UserInput
                    input_title={`${input_name} = `}
                    val_index={index}
                    inputVal={inputValueList[index]}
                    handleChange={handleInputChange}
                    key={index}
                />)
            )}
            <ControlButton
                name="Start"
                style={methodStyle}
                onStart={handleStart}
                inputNameList={inputList}
                inputValList={inputValueList}
                methodName={name}
            />
             <ControlButton
                name="No Animation"
                style={methodStyle}
                onStart={handleStart}
                inputNameList={inputList}
                inputValList={inputValueList}
                methodName={name}
            />
        </div>
    );
}

export default Method