import BstNode from "./Node/BstNode";
import SinglyListNode from "./Node/SinglyListNode";
import ArrayNode from "./Node/ArrayNode";
import DoublyListNode from "./Node/DoublyListNode";
import StackNode from "./Node/StackNode";
import NullNode from "./Node/NullNode";
import { null_node_bst, null_node_sll } from "../UI/style";


const HeroAnimation = () => {
    const animeDuration = 1;

    return (
        <svg viewBox="0 0 1200 1200" className="w-[18rem] sm:w-[30em] md:w-[33em] lg:w-[1080] h-auto" xmlns="http://www.w3.org/2000/svg">
            <SinglyListNode 
                data={30} 
                x={180} 
                y={250} 
                angle={-10} 
                moveAmount={20} 
                animeDuration={animeDuration}
            />
            <NullNode
                color={null_node_sll.text}
                bg={null_node_sll.bg}
                x={205}
                y={160}
                angle={-10}
                moveAmount={20}
                animeDuration={animeDuration}
            />
            <SinglyListNode 
                data={20} 
                x={400} 
                y={600} 
                angle={-20} 
                moveAmount={-15} 
                animeDuration={animeDuration}
            />
            <BstNode
                data={33}
                x={100}
                y={70}
                angle={-30}
                animeDuration={animeDuration}
                moveAmount={-20} 
            />
            <BstNode
                data={50}
                x={600}
                y={85}
                angle={10}
                animeDuration={animeDuration}
                moveAmount={20} 
            />
            <ArrayNode
                x={500}
                y={230}
                data={50}
                idx="3"
                angle={30}
                moveAmount={-20}
                animeDuration={animeDuration}
            />
            <ArrayNode
                x={900}
                y={180}
                data={100}
                idx="2"
                angle={5}
                moveAmount={20}
                animeDuration={animeDuration}
            />
              <NullNode
                color={null_node_bst.text}
                bg={null_node_bst.bg}
                x={950}
                y={85}
                angle={5}
                moveAmount={20}
                animeDuration={animeDuration}
            />
            <DoublyListNode
                x={80}
                y={600}
                data={60}
                angle={-30}
                moveAmount={20}
                animeDuration={animeDuration}
            />
             <DoublyListNode
                x={800}
                y={600}
                data={2}
                angle={40}
                moveAmount={-20}
                animeDuration={animeDuration}
            />
               <BstNode
                data={20}
                x={920}
                y={520}
                angle={10}
                animeDuration={animeDuration}
                moveAmount={-20} 
            />
            <ellipse
                rx={500}
                ry={50}
                cx={540}
                cy={1080}
                fill="#808080"
            />
            <StackNode
                data={7}
                x={540}
                y={1000}
                angle={0}
            />
            <StackNode
                data={8}
                x={360}
                y={950}
                angle={-30}
            />
        </svg>
    );
};

export default HeroAnimation