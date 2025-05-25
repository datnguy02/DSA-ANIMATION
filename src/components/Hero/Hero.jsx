import ButtonWithBg from "../Button/ButtonWithBg";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-[4rem] items-center px-[5em] py-[3em] max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-[2rem]">
                <h1 className="font-bold text-[1.5em] text-primary text-center">
                    Get more insight into the world of Data Structure and Algorithm with Visualization!
                </h1>
                <ButtonWithBg text="Get Start"/>
            </div>
            <div>
               <HeroAnimation/>
            </div>
        </div>

    );
};

export default Hero