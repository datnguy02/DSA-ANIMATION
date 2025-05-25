import BstNode from "./Node/BstNode";
import SinglyListNode from "./Node/SinglyListNode";



const HeroAnimation = () => {
    const animeDuration = 1;

    return (
        <svg viewBox="0 0 1000 1000" className="w-[18rem] sm:w-[30em] md:w-[33em] lg-[35em] h-auto" xmlns="http://www.w3.org/2000/svg">
            <SinglyListNode 
                data={30} 
                x={180} 
                y={164} 
                angle={-10} 
                moveAmount={20} 
                animeDuration={animeDuration}
            />
            <SinglyListNode 
                data={20} 
                x={286} 
                y={500} 
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
            
        </svg>
    );
};

export default HeroAnimation