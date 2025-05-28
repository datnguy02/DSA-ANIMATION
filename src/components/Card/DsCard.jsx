import Title from "../Title/Title";
import { Link } from "react-router-dom";

const removeSpace = (str) => {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (ch != " ") {
            res += ch;
        }
    }
    return res;
}

const DsCard = ({name, type, difficulty, img, bg}) => {

    return (
        <Link to={`/data-structure/${removeSpace(name.toLowerCase())}`}>
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
        </Link>
    );
};


export default DsCard