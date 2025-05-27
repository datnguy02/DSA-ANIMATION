const Title = ({title, fontSize, color}) => {
    return (
            <h1 className="font-bold"
                style={
                    {
                        fontSize: fontSize,
                        color: color,
                    }
                }
            >
                {title}
            </h1>
    );

};

export default Title