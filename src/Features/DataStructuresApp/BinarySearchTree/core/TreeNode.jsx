export class TreeNode {
    constructor(value, x, y, level, id) {
        this._value = value;
        this._id = id;
        this._left = null;
        this._right = null;
        this._parent = null;
        this._x = x;
        this._y = y;
        this._level = level;
    }

    get level() {
        return this._level;
    }

    set level(level) {
        this._level = level;
    }

    get parent() {
        return this._parent;
    }

    set parent(p) {
        this._parent = p;
    }

    get x() {
        return this._x;
    }

    set x(posX) {
        this._x = posX;
    }

    get y() {
        return this._y;
    }

    set y(posY) {
        this._y = posY;
    }

    get value() {
        return this._value;
    }
    
    set value(val) {
        this._value = val;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get left() {
        return this._left;
    }

    set left(left) {
        this._left = left;
    }

    get right() {
        return this._right;
    }

    set right(right) {
        this._right = right;
    }

    


}