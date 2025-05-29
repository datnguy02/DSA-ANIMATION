import colorway from "../../../assets/color-style/sllStyle";
import { LinkedList } from "./core/singlylinkedlist";
import SinglyLinkedList from "./SinglyLinkedList";
import { useState } from "react";

const initialList = new LinkedList();
for (let i = 0; i < 5; i++) {
    initialList.insertFirst(Math.round((Math.random() * 10000) % 100));
}

console.log(initialList);

const SinglyLinkedListApp = () => {
    const [operation, setOperation] = useState({
                                                list: initialList,
                                                name: "normal"
                                                });
    return (
        <>
            <div    
                className="w-screen h-screen flex justify-center items-start"
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