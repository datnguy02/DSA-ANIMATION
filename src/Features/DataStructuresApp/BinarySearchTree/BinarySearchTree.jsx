import { useEffect, useRef } from "react";

const BinarySearchTree = ({operation}) => {
    const tree = operation.data_structure;
    const operationName = operation.name;
    const tl = useRef(null);
    useEffect(() => {
        const noAnimationOperations = ["None", "revert", "forward"];
        if (!noAnimationOperations.includes(operationName))
            tl.current = operation.gsapTimeLine;
        if (operation.useAnime) {
            if (operationName === "search")
                console.log("search");
        }
        
        if (!noAnimationOperations.includes(operationName)) {
            tl.current.to("div", {
                duration: 0,
                onComplete: () => {
                        if (operation.cleanAnime)
                            operation.cleanAnime()
                    }
                });
        }

        return () => {
            if (tl.current) {
                tl.current.revert();
                tl.current = null;
            }
        }

    }, [operation])
    
    return (<svg viewBox="-400 300 5200 1500" 
                width={3000}
                height={800}
            >
                {tree.getJSXs()}
            </svg>);
};

export default BinarySearchTree;