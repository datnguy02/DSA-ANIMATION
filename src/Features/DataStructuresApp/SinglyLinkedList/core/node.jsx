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

        // style of node
        this._WIDTH = node_size["WIDTH"];
        this._HEIGHT = node_size["HEIGHT"];
        this._BG = colorway["NODE_BG"];
        this._BORDER_RAD = node_size["NODE_BORDER_RAD"];
        this._REF_NODE_WIDTH = node_size["REF_NODE_WIDTH"];
        this._REF_NODE_HEIGHT = node_size["REF_NODE_HEIGHT"];
        this._REF_NODE_BG = colorway["NODE_REF_BG"];
        this._REF_NODE_RAD = node_size["REF_NODE_RAD"];
        this._STROKE = colorway["NODE_BORDER"];
        this._STROKE_WIDTH = node_size["STROKE_WIDTH"];
        this._REF_LINE_THICKNESS = node_size["REF_LINE_WIDTH"];
        this._REF_LINE_COLOR = colorway["REF_LINE"];
        this._GAP = node_size["GAP"];
        if (next == undefined)
            this._next = null;
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

}