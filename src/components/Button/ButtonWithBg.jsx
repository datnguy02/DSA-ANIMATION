const ButtonWithBg = ({text}) => {
    return <button 
                className="
                            font-bold 
                            text-main 
                            text-[1.2rem] 
                            bg-primary
                            py-[0.5em]
                            px-[3em]
                            rounded-[2em]
                            self-center
            ">
                {text}
            </button>;
};

export default ButtonWithBg;