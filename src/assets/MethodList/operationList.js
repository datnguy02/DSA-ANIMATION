const operation_bar = {
    "sll": {
        style: {
            BG: "#113C51",
            START_BUTTON_BG: "#477186",
            METHOD_BUTTON_BG: "#477186",
            TEXT: "white"
        },
        methods: [
            {
                name: "Insert(i)",
                inputList: ["Value", "Index"],
            },
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
            }
        ]
    }
};

export default operation_bar