const BinarySearchTree = ({operation}) => {
    const tree = operation.data_structure;
    tree.inorder();
    return (<svg viewBox="0 0 2000 2000" 
                width={1800}
                height={600}
                className="border-2"
            >
                {tree.getJSXs()}
            </svg>);
};

export default BinarySearchTree;