const colorway = {
    "singlylinkedlist": {
        BG: "#032536",
        NODE_BG: "#113C51",
        NODE_BORDER: "#477186",
        NODE_TEXT: "white",
        NODE_REF_BG: "#477186",
        NODE_REF_LINE: "#477186",
        NULL_NODE_BG: "477186",
        NULL_NODE_TEXT: "white",
        NODE_REF_TEXT: "white",
        REF_LINE: "#477186",
        LIST_BG: "#113C51",
        HEAD_BG: "#477186",
        TAIL_BG: "#477186",

        // style of head ref when it's visited by current
        HEAD_CONTROL_BG: "#dbd8e3",
        HEAD_CONTROL_TEXT: "#5c5470",

        // style of head ref when it's visited by prev
        HEAD_PREV_BG: "#b9dbe6",
        HEAD_PREV_TEXT: "#304852",

        // style when node is visited
        NODE_CURRENT_VISIT_BG: "#5c5470",
        REF_CURRENT_VISIT_BG: "#dbd8e3",
        NODE_CURRENT_VISIT_STROKE: "#dbd8e3",
        NODE_CURRENT_VISIT_TEXT: "#5c5470",

        // style when prev node is visited
        NODE_PREV_VISIT_BG: "#5f818a",
        REF_PREV_VISIT_BG: "#b9dbe6",
        NODE_PREV_VISIT_STROKE: "#b9dbe6",
        NODE_PREV_VISIT_TEXT: "#304852",

        // styling for travel node
        CURRENT_BG: "#5c5470",
        CURRENT_STROKE: "#dbd8e3",
        CURRENT_TEXT: "#dbd8e3",

        // styling for previous travel node,
        PREV_BG: "#5f818a",
        PREV_STROKE: "#b9dbe6",
        PREV_TEXT: "#b9dbe6"
    },
    "binarysearchtree": {
        BG: "#35635B",
        NODE_BG: "#529471",
        NODE_BORDER: "#E5F1E3",
        NODE_TEXT: "#E5F1E3",
        NULL_BG: "#E5F1E3",
        NULL_TEXT: "#35635B"
        
    }

};

export default colorway;