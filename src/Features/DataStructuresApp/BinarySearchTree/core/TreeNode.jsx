import colorway from "../../../../assets/color-style/sllStyle";
import treeNode_size from "../../../../assets/size/bst_size";


export class TreeNode {
    constructor(value, x, y, level, index, vertical_gap, tree_height, scale, startX, id) {
        this._value = value;
        this._id = id;
        this._left = null;
        this._right = null;
        this._parent = null;
        this._x = x;
        this._y = y;
        this._level = level;
        this._index = index;
        this._node_gap = 0;
        this._vertical_gap = vertical_gap;
        this._tree_height = tree_height;
        this._SCALE = scale;
        this._startX = startX;

        // style
        let color = colorway["binarysearchtree"];
        this._BG = color["NODE_BG"];
        this._BORDER = color["NODE_BORDER"];
        this._TEXT = color["NODE_TEXT"];
        this._NULL_TEXT = color["NULL_TEXT"];
        this._NULL_BG = color["NULL_BG"];

        // size
        let size = treeNode_size;
        this._RADIUS = size["RADIUS"];
        this._ROUNDED = size["ROUNDED"];
        this._STROKE_WIDTH = size["STROKE_WIDTH"];
        this._TEXT_SIZE = size["FONT_SIZE"];
        this._REF_WIDTH = size["REF_WIDTH"];
        this._REF_HEIGHT = size["REF_HEIGHT"];
        this._NULL_HEIGHT=  size["NULL_HEIGHT"];
        this._NULL_WIDTH = size["NULL_WIDTH"];
    }

    get startX() {
        return this._startX;
    }

    get SCALE() {
        return this._SCALE;
    }

    get tree_height() {
        return this._tree_height;
    }

    get NULL_BG() {
        return this._NULL_BG;
    }

    get NULL_TEXT() {
        return this._NULL_TEXT;
    }

    get NULL_HEIGHT() {
        return this._NULL_HEIGHT;
    }

    get NULL_WIDTH() {
        return this._NULL_WIDTH;
    }

    get vertical_gap() {
        return this._vertical_gap;
    }

    set vertical_gap(gap) {
        this._vertical_gap = gap;
    }

    get node_gap() {
        return this._node_gap;
    }

    set node_gap(gap) {
        this._node_gap = gap;
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

    getChildPos(isLeft) {
        const childIndex = isLeft ? this.index * 2 : this.index * 2 + 1;
        const childLevel = this.level + 1;
        const space = 2**(this.tree_height - childLevel - 1);
        const child_gap = 2**(this.tree_height - childLevel);
        return {
            x: ((space + (child_gap * childIndex)) * this.SCALE) + this.startX,
            y: this.y + this.vertical_gap,
        };
    }

    getChildGap() {
        return (2**(this.tree_height - (this.level + 1)) *this.SCALE);
    }

    getAngle() {
        const {x, y} = this.getChildPos();
        const disY = Math.abs(this.y - y);
        const disX = Math.abs(this.x - x);
        return Math.atan(disX/disY) * (180/Math.PI);
    }

    getVerticalDis() {
        const angle = (90 - this.getAngle(true)) * (Math.PI/180);
        return Math.sin(angle - 0.3) * this.RADIUS;
    }

    getHorizontalDis() {
        const angle = (90 - this.getAngle(true)) * (Math.PI/180);
        return Math.cos(angle - 0.3) * this.RADIUS;
    }

    getLineWidth() {
        const {x,y} = this.getChildPos();
        const disX  = Math.abs(this.y - y);
        const disY = Math.abs(this.x - x);
        return Math.sqrt(disX**2 + disY**2) - this.RADIUS - this.REF_HEIGHT;
    }

    getRefLineAttr(isLeft) {
        if (isLeft) 
            return `M${this.REF_WIDTH/2} ${this.REF_HEIGHT} L${this.REF_WIDTH/2} ${this.REF_HEIGHT + this.getLineWidth(true)}`
    }
    


}