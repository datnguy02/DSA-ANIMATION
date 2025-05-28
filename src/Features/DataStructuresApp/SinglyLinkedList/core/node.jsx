import { node_size } from "../../../../assets/size/sll_size";

export class Node {
    constructor(val, next, id) {
        this._val = val;
        this._next = next;
        this._id = id;
        this._x = 0;
        this._y = 0;
        this._NODE_WIDTH = node_size["WIDTH"];
        this._NODE_HEIGHT = node_size["HEIGHT"];
        if (next == undefined)
            this._next = null;
    }

    get NODE_WIDTH() {
        return this._NODE_WIDTH;
    }

    get NODE_HEIGHT() {
        return this._NODE_HEIGHT;
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