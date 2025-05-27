import Title from "../Title/Title";

const DsCard = ({name, type, difficulty, img, bg}) => {
    return (
        <div style={
                {
                    background: bg
                }
            }
            className="p-[1.5em] rounded-[1em] flex flex-col justify-end"
        >
            {img}
            <div className="self-start">
                <Title title={`${name}`} fontSize="1.5rem" color="white"/>
                <Title title={`Type: ${type}`} color="white"/>
                <Title title={`Difficulty: ${difficulty}`} color="white"/>
            </div>
        </div>
    );
};

export default DsCard