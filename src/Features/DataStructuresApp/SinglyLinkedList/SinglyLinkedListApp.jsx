import colorway from "../../../assets/color-style/sllStyle";
import { LinkedList } from "./core/singlylinkedlist";
import SinglyLinkedList from "./SinglyLinkedList";
import { useState } from "react";

const initialList = new LinkedList();
for (let i = 0; i < 5; i++) {
    initialList.insertFirst(Math.random() % 100);
}

const SinglyLinkedListApp = () => {
    const [operation, setOperation] = useState({
                                                list: initialList,
                                                name: "normal"
                                                });
    return (
        <>
            <div    
                className="w-screen h-screen"
                style={
                    {
                        backgroundColor: colorway["BG"]
                    }
                }
            >
                <SinglyLinkedList
                    operation={operation}
                />
            </div>
        </>

    );
};

export default SinglyLinkedListApp