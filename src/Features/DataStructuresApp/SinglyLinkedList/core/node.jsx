import { node_size } from "../../../../assets/size/sll_size";
import colorway from "../../../../assets/color-style/sllStyle";

export class Node {
    constructor(val, x, y, next, id) {
        this._val = val;
        this._next = next;
        this._id = id;

        // coordinate of node
        this._x = x;
        this._y = y;

        // dom Element reference
        this._domNode = null;
        this._nodeContainer = null;
        this._dataContainer = null;
        this._dataText = null;
        this._nextRef = null;
        this._nextRefText = null;
        this._refLine = null;

        // size of node
        this._WIDTH = node_size["WIDTH"];
        this._HEIGHT = node_size["HEIGHT"];
        this._BORDER_RAD = node_size["NODE_BORDER_RAD"];
        this._REF_NODE_WIDTH = node_size["REF_NODE_WIDTH"];
        this._REF_NODE_HEIGHT = node_size["REF_NODE_HEIGHT"];
        this._REF_NODE_RAD = node_size["REF_NODE_RAD"];
        this._STROKE_WIDTH = node_size["STROKE_WIDTH"];
        this._REF_LINE_THICKNESS = node_size["REF_LINE_WIDTH"];
        this._GAP = node_size["GAP"];

        // styling
        this._BG = colorway["NODE_BG"];
        this._REF_NODE_BG = colorway["NODE_REF_BG"];
        this._STROKE = colorway["NODE_BORDER"];
        this._REF_LINE_COLOR = colorway["REF_LINE"];

        this._NORMAL_STYLE = {
            BG: colorway["NODE_BG"],
            STROKE: colorway["NODE_REF_BG"],
            REF_BG: colorway["NODE_REF_BG"],
            TEXT: "white",
        };

        this._CURRENT_VISIT_STYLE = {
            BG: colorway["NODE_CURRENT_VISIT_BG"],
            STROKE: colorway["NODE_CURRENT_VISIT_STROKE"],
            REF_BG: colorway["REF_CURRENT_VISIT_BG"],
            TEXT: colorway["NODE_CURRENT_VISIT_TEXT"]
        };


        if (next == undefined)
            this._next = null;
    }

    get CURRENT_VISIT_STYLE() {
        return this._CURRENT_VISIT_STYLE;
    }

    get NORMAL_STYLE() {
        return this._NORMAL_STYLE;
    }

    get refLine() {
        return this._refLine;
    }

    set refLine(line) {
        this._refLine= line;
    }

    get nextRefText() {
        return this._nextRefText;
    }

    set nextRefText(node) {
        this._nextRefText = node;
    }


    get dataText() {
        return this._dataText
    }

    set dataText(node) {
        this._dataText = node;
    }

    get nextRef() {
        return this._nextRef
    }

    set nextRef(node) {
        this._nextRef = node;
    }

    get dataContainer() {
        return this._dataContainer
    }

    set dataContainer(node) {
        this._dataContainer = node;
    }



    get domNode() {
        return this._domNode;
    }

    set domNode(node) {
        this._domNode = node;
    }

    get GAP() {
        return this._GAP;
    }

    get REF_LINE_COLOR() {
        return this._REF_LINE_COLOR
    }

    get REF_LINE_WIDTH() {
        return (this.WIDTH - this.REF_NODE_WIDTH) / 2 + this.GAP;
    }


    get REF_LINE_THICKNESS() {
        return this._REF_LINE_THICKNESS;
    }

    get STROKE_WIDTH() {
        return this._STROKE_WIDTH;
    }

    get STROKE() {
        return this._STROKE;
    }

    get REF_NODE_RAD() {
        return this._REF_NODE_RAD;
    }

    get REF_NODE_BG() {
        return this._REF_NODE_BG;
    }

    get REF_NODE_WIDTH() {
        return this._REF_NODE_WIDTH;
    }

    get REF_NODE_HEIGHT() {
        return this._REF_NODE_HEIGHT;
    }

    get BORDER_RAD() {
        return this._BORDER_RAD;
    }

    get BG() {
        return this._BG;
    }

    get WIDTH() {
        return this._WIDTH;
    }

    get HEIGHT() {
        return this._HEIGHT;
    }

    get x() {
        return this._x;
    }

    set x(xPos) {
        this._x = xPos;
    }

    get y() {
        return this._y;
    }

    set y(yPos) {
        this._y = yPos;
    }

    get value() {
        return this._val;
    }

    set value(val) {
        this._val = val;
    }

    get next() {
        return this._next;
    } 

    set next(n) {
        this._next = n;
    }

    getRefLineAttr(amountX, amountY) {
        return `M${this.REF_NODE_WIDTH} ${this.REF_NODE_HEIGHT/2} 
                L${this.REF_NODE_WIDTH + amountX} ${this.REF_NODE_HEIGHT/2 + amountY}`;
    }

    changeStyle(tl, style, pos) {
        const {BG, STROKE, TEXT, REF_BG} = style;
        tl.to(this.domNode, {attr: {fill: BG, stroke: STROKE}}, pos)
        .to([this.nextRef, this.dataContainer], {attr: {fill: REF_BG}}, "<")
        .to([this.nextRefText, this.dataText], {attr: {fill: TEXT}}, "<")
        return tl;
    }

}