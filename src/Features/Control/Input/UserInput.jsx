const UserInput = ({input_title, val_index, inputVal, handleChange}) => {
    return (
        <label className="font-bold">
            {input_title}
            <input 
                    className="bg-white text-black rounded-[0.1em]"
                    value={inputVal}
                    onChange={e => handleChange(e.target.value, val_index)}
            />
        </label>

    );
};

export default UserInput