import Title from "../Title/Title";

const DsCard = ({name, type, difficulty, img, bg}) => {
    return (
        <div style={
                {
                    background: bg
                }
            }
            className="p-[2em] rounded-[1em] flex flex-col gap-[2rem] justify-end items-center"
        >
            {img}
            <div>
                <Title title={`${name}`} fontSize="1.5rem"/>
                <Title title={`Type: ${type}`}/>
                <Title title={`Difficulty: ${difficulty}`}/>
            </div>
        </div>
    );
};

export default DsCard