const BinarySearchTree = ({operation}) => {
    const tree = operation.data_structure;
    tree.inorder();
    return (<svg viewBox="-300 500 4500 1500" 
                width={3000}
                height={800}
                className="border-2"
            >
                {tree.getJSXs()}
            </svg>);
};

export default BinarySearchTree;