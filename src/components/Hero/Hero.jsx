import ButtonWithBg from "../Button/ButtonWithBg";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row lg:gap-[4rem] items-center justify-center py-[3em] max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center gap-[2rem] my-[2rem]">
                <h1 className="font-bold text-[1.3rem] text-primary text-center max-w-[35rem]">
                    Get more insight into the world of Data Structure and Algorithm with Visualization!
                </h1>
                <ButtonWithBg text="Get Start"/>
            </div>
            <HeroAnimation/>
        </div>

    );
};

export default Hero