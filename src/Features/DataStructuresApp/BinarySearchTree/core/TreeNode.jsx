import colorway from "../../../../assets/color-style/sllStyle";
import treeNode_size from "../../../../assets/size/bst_size";


export class TreeNode {
    constructor(value, x, y, level, index, id) {
        this._value = value;
        this._id = id;
        this._left = null;
        this._right = null;
        this._parent = null;
        this._x = x;
        this._y = y;
        this._level = level;
        this._index = index;

        // style
        let color = colorway["binarysearchtree"];
        this._BG = color["NODE_BG"];
        this._BORDER = color["NODE_BORDER"];
        this._TEXT = color["NODE_TEXT"];

        // size
        let size = treeNode_size;
        this._RADIUS = size["RADIUS"];
        this._ROUNDED = size["ROUNDED"];
        this._STROKE_WIDTH = size["STROKE_WIDTH"];
        this._TEXT_SIZE = size["FONT_SIZE"];
        this._REF_WIDTH = size["REF_WIDTH"];
        this._REF_HEIGHT = size["REF_HEIGHT"];
    }

    get REF_WIDTH() {
        return this._REF_WIDTH;
    }

    get REF_HEIGHT() {
        return this._REF_HEIGHT;
    }

    get index() {
        return this._index;
    }

    set index(index) {
        this._index = index;
    }

    get TEXT_SIZE() {
        return this._TEXT_SIZE;
    }

    get RADIUS() {
        return this._RADIUS;
    }

    get ROUNDED() {
        return this._ROUNDED;
    }

    get STROKE_WIDTH() {
        return this._STROKE_WIDTH;
    }

    get BG() {
        return this._BG;
    }

    get BORDER() {
        return this._BORDER;
    }

    get TEXT() {
        return this._TEXT;
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

    getAngle(isLeft) {
        let child = isLeft ? this.left : this.right;
        if (child !== null) {
            const y = Math.abs(this.y - child.y);
            const x = Math.abs(this.x - child.x);
            console.log(`node ${this.value} has angle ${Math.atan(y/x) * (180/Math.PI)}`)
            return Math.atan(x/y) * (180/Math.PI);
        }
        return 0;
    }

    getVerticalDis() {
        const angle = (90 - this.getAngle(true)) * (Math.PI/180);
        return Math.sin(angle) * this.RADIUS;
    }

    getLineWidth(isLeft) {
        let child = isLeft ? this.left : this.right;
        if (child !== null) {
            const y = Math.abs(this.y - child.y);
            const x = Math.abs(this.x - child.x);
            return Math.sqrt(x**2 + y**2);
        }
        return 0;
    }

    getRefLineAttr(isLeft) {
        if (isLeft) 
            return `M${this.REF_WIDTH/2} ${this.REF_HEIGHT} L${this.REF_WIDTH/2} ${this.REF_HEIGHT + this.getLineWidth(true) - this.RADIUS}`
    }
    


}