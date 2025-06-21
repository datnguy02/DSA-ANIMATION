import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Message = ({message}) => {
    const messageDom = useRef();
    useGSAP(() => {
        gsap.fromTo(messageDom.current, {
            opacity: 0,
            transform: "translate(3rem, 3rem)"
        }, {
            opacity: 1,
            transform: "translate(0, 0)",
            duration: 0.2,
        });
    });
    return (<div className="text-black rounded-[0.5em] font-bold p-3.5 bg-white fixed bottom-6 right-5"
                ref={messageDom}
            >
            {message}
            </div>)
};

export default Message