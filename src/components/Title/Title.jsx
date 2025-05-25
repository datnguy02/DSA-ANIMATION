const Title = ({title, fontSize}) => {
    return (
            <h1 className="font-bold text-white"
                style={
                    {
                        fontSize: fontSize
                    }
                }
            >
                {title}
            </h1>
    );

};

export default Title