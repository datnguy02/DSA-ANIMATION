const operation_bar = {
    "singlylinkedlist": {
        style: {
            BG: "#113C51",
            START_BUTTON_BG: "#477186",
            METHOD_BUTTON_BG: "#477186",
            TEXT: "white"
        },
        methods: [
            {
                name: "Delete",
                inputList: ["Value"]
            },
            {
                name: "Search",
                inputList: ["Value"]
            },
            {
                name: "InsertLast",
                inputList: ["Value"]
            },
            {
                name: "InsertFirst",
                inputList: ["Value"]
            },
            {
                name: "InsertAt",
                inputList: ["Value", "Index"],
            },
        ]
    },
    "binarysearchtree": {
        style: {
            BG: "#529471",
            START_BUTTON_BG: "#A3CD9E",
            METHOD_BUTTON_BG: "#A3CD9E",
            TEXT: "white"
        },
        methods: [
            {
                name: "InOrder",
                inputList: []
            },
            {
                name: "PostOrder",
                inputList: []
            },
            {
                name: "PreOrder",
                inputList: []
            },
            {
                name: "Search",
                inputList: ["Value"]
            },
            {
                name: "Insert",
                inputList: ["Value"],
            },
            {
                name: "Delete",
                inputList:["Value"],
            }
        ]
    }
};

export default operation_bar