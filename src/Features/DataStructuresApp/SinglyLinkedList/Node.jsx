const Node = ({node}) => {
    const data = node.value;
    

    return (
        <g>
            <rect/>
            <text>{data}</text>
        </g>
    );
};

export default Node