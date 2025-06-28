const Node = ({node}) => {
    return (
        
        <g transform={`translate(${node.x}, ${node.y})`}>
            <rect
                fill="green"
                width={150}
                height={150}
                rx={75}
            />
             <text   fontWeight="bold" 
                    y={75}
                    x={75}
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="white"
                    fontSize={50}
            >
                {node.value}
            </text>

        </g>);

};

export default Node