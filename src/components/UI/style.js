const FONT_SIZE = 35;
const NODE_ROUNDED = 20;
const NODE_STROKE_WIDTH = "8";

// Singly-Linked-List node style
const sll_node = {
    node_bg: "#113C51",
    node_stroke: "#477186",
    node_text: "white",
    node_width: "200",
    node_height: "250",
    node_stroke_width: NODE_STROKE_WIDTH,

    ref_node_bg: "#477186",
    ref_node_text: "white",
    ref_node_width: 140,
    ref_node_height: 70,

    fontSize: FONT_SIZE,
};

// Binary Search Tree node style
const bst_node = {
    node_bg: "#529471",
    node_stroke: "#E5F1E3",
    node_text: "#E5F1E3",
    node_radius: 50,
    node_stroke_width: NODE_STROKE_WIDTH,
    node_rounded: 10,

    ref_node_bg: "#529471",
    ref_node_text: "#E5F1E3",
    ref_node_width: 40,
    ref_node_height: 80,
    ref_node_stroke_width: 5,

    fontSize: FONT_SIZE,
};

// Doubly Linked List node style
const dbll_node = {
    node_bg: "#5F818A",
    node_stroke: "#B9DBE6",
    node_stroke_width: NODE_STROKE_WIDTH,
    node_text: "#304852",
    node_width: "250",
    node_height: "380",
    node_rounded: NODE_ROUNDED,


    ref_node_width: "180",
    ref_node_height: "70",
    ref_node_bg: "#B9DBE6",
    ref_node_text: "#304852",

    fontSize: FONT_SIZE,
};

// Array node style
const array_node = {
    node_bg: "#933533",
    node_stroke: "#DF5A57",
    node_text: "white",
    node_width: "230",
    node_height: "230",
    node_rounded: NODE_ROUNDED,
    node_stroke_width: NODE_STROKE_WIDTH,

    node_data_bg: "#DF5A57",
    node_data_width: "180",
    node_data_height: "90",
    node_data_rounded: NODE_ROUNDED,
    

    fontSize: FONT_SIZE,
};

const stack_node = {
    node_bg: "#9D6B53",
    node_rounded: 10,
    node_height: "70",
    node_width: "250",
    node_stroke: "#C38E70",
    node_stroke_width: NODE_STROKE_WIDTH,
    node_text: "#774936",
     fontSize: FONT_SIZE,
};

const null_node_sll = {
    bg: "#477186",
    text: "white"
}


const null_node_bst = {
    bg: "#E5F1E3",
    text: "#35635B"
}



export {array_node, 
        sll_node, 
        bst_node, 
        dbll_node, 
        stack_node,
        null_node_sll,
        null_node_bst   
};