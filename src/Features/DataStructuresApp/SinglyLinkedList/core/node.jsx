export class Node {
    constructor(val, next, id) {
        this._val = val;
        this._next = next;
        this._id = id;
        if (next == undefined)
            next = null;
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