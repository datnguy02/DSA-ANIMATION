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
        this._NULL_TEXT_SIZE = size["NULL_TEXT_SIZE"];
        this._LINE_THICKNESS = size["LINE_THICKNESS"];


        // Dom element reference
        this._leftLine = null;
        this._rightLine = null;
        this._virtualLefLine = null;
        this._virtualRightLine = null;
        this._leftRef = null;
        this._leftText = null;
        this._leftContainer = null;
        this._rightRef = null;
        this._rightText = null;
        this._rightContainer = null;
        this._container = null;
        this._text = null;
        this._domNode = null;
        this._rightNull = null;
        this._leftNull = null;
        this._leftNullContainer = null;
        this._rightNullContainer = null;
        this._wrapper = null;


        this._NORMAL_STYLE = {
            BG: color["NODE_BG"],
            BORDER: color["NODE_BORDER"],
            TEXT: color["NODE_TEXT"],
        };


        this._CURRENT_VISIT_STYLE = {
            BG: color["CURRENT_BG"],
            BORDER: color["CURRENT_BORDER"],
            TEXT: color["CURRENT_TEXT"],
        };
    }


    get leftContainer() {
        return this._leftContainer;
    }

    set leftContainer(node) {
        this._leftContainer = node;
    }

    get leftText() {
        this._leftText;
    }

    set leftText(node) {
        this._leftText = node;
    }

    get rightContainer() {
        return this._rightContainer;
    }

    set rightContainer(node) {
        this._rightContainer = node;
    }

    get rightText() {
        return this._rightText;
    }

    set rightText(node) {
        this._rightText = node;
    }

    get wrapper() {
        return this._wrapper;
    }

    set wrapper(node) {
        this._wrapper = node;
    }

    get text() {
        return this._text;
    }

    set text(node) {
        this._text  = node;
    }

    get NORMAL_STYLE() {
        return this._NORMAL_STYLE;
    }

    get CURRENT_VISIT_STYLE() {
        return this._CURRENT_VISIT_STYLE;
    }

    get LINE_THICKNESS() {
        return this._LINE_THICKNESS;
    }

    get rightNullContainer() {
        return this._rightNullContainer;
    }

    set rightNullContainer(node) {
        this._rightNullContainer = node;
    }

    get leftNullContainer() {
        return this._leftNullContainer;
    }

    set leftNullContainer(node) {
        this._leftNullContainer = node;
    }

    get leftLine() {
        return this._leftLine;
    }

    set leftLine(line) {
        this._leftLine = line;
    }

    get rightLine() {
        return this._rightLine;
    }

    set rightLine(line) {
        this._rightLine = line;
    }

    get container() {
        return this._container;
    }

    set container(container) {
        this._container = container;
    }

    get leftRef() {
        return this._leftRef;
    }

    set leftRef(ref) {
        this._leftRef = ref;
    }

    get rightRef() {
        return this._rightRef;
    }

    set rightRef(ref) {
        this._rightRef = ref;
    }

    get domNode() {
        return this._domNode;
    }
    
    set domNode(node) {
        this._domNode = node;
    }

    get rightNull() {
        return this._rightNull;
    }

    set rightNull(node) {
        this._rightNull = node;
    }

    get leftNull() {
        return this._leftNull;
    }

    set leftNull(node) {
        this._leftNull = node;
    }

    get virtualLeftLine() {
        return this._virtualLefLine;
    }

    set virtualLeftLine(line) {
        this._virtualLefLine = line;
    }

    get virtualRightLine() {
        return this._virtualRightLine;
    }

    set virtualRightLine(line) {
        this._virtualRightLine = line;
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

    get NULL_TEXT_SIZE() {
        return this._NULL_TEXT_SIZE;
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
            return `M${this.REF_WIDTH/2} ${this.REF_HEIGHT} 
                    Q${this.REF_WIDTH/2 + (isLeft ? - 40: 40)} ${(this.REF_HEIGHT + this.getLineWidth(true))/2} 
                    ${this.REF_WIDTH/2} ${this.REF_HEIGHT + this.getLineWidth(true)}`
    }

    animeStyle(tl, style, pos) {
        const {BG, TEXT, BORDER} = style;
        tl.to(this.domNode, {
            attr: {
                fill: BG, 
                stroke: BORDER,
            }
        }, pos).to(this.text, {
            attr: {
                fill: TEXT,
            }
        }, "<");
        return tl;
    }

    

    scale(tl, factor, pos) {
        tl.to(this.wrapper, {
            attr: {
                transform:  `scale(${factor})`,
            }
        }, pos);
        return tl;
    }


    
    


}