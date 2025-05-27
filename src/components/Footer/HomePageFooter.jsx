import Title from "../Title/Title";

const HomePageFooter = () => {
    return (
        <div className="bg-primary p-[3em] flex  flex-col justify-between items-center">
            <Title
                title="DSA ANIMATION"
                fontSize="1rem"
                color="white"
            />
            <h1 className="text-white text-center">Copyright © 2025 DSA ANIMATION. All Right reserved</h1>
            <h1 className="text-white text-center">Created By <span className="font-bold">Dat Nguyen</span></h1>
        </div>
    );
};

export default HomePageFooter