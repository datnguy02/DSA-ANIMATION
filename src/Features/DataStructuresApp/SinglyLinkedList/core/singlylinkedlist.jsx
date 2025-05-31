import { Node } from "./node";
import { node_size } from "../../../../assets/size/sll_size";
import colorway from "../../../../assets/color-style/sllStyle";

export class LinkedList {
    constructor () {
        this._head = null;
        this._tail = null;
        this._nElement = 0;
        this._GAP = node_size["GAP"];
        this._y = 300;
        this._startX = 300;
        this._startY = 300;
        this._WIDTH = node_size["WIDTH"];
        this._HEIGHT = node_size["HEIGHT"];
        this._HEAD_WIDTH = node_size["REF_NODE_WIDTH"];
        this._HEAD_HEIGHT = node_size["REF_NODE_HEIGHT"];
        this._BG = colorway["LIST_BG"];
        this._HEAD_BG = colorway["HEAD_BG"];
        this._TAIL_BG = colorway["TAIL_BG"];
        this._STROKE = colorway["NODE_BORDER"];
        this._STROKE_WIDTH = node_size["STROKE_WIDTH"];
        this._ROUNED = node_size["NODE_BORDER_RAD"];
        this._REF_LINE_COLOR = colorway["REF_LINE"];
        this._REF_LINE_THICKNESS = node_size["STROKE_WIDTH"]
        this._REF_NODE_ROUNDED = node_size["REF_NODE_RAD"];
        this._tailLineY = null;
        this._tailLineX = null;
        this._headRef = null;
        this._tailRef = null;
        this._headRefTetxt = null;
        this._tailRefText = null;
        this._headLine = null;
    }

    get headLine() {
        return this._headLine;
    }

    set headLine(line) {
        this._headLine = line;
    }

    get headRef() {
        return this._headRef;
    }

    set headRef(node) {
        this._headRef = node;
    }

    get tailRef() {
        return this._tailRef;
    }

    set tailRef(tail) {
        this._tailRef = tail;
    }

    get tailRefText() {
        return this._tailRefText;
    }

    set tailRefText(node) {
        this._tailRefText = node;
    } 

    get headRefText() {
        return this._headRefTetxt;
    }

    set headRefText(node) {
        this._headRefTetxt = node;
    }


    get tailLineX() {
        return this._tailLineX;
    }

    set tailLineX(line) {
        this._tailLineX = line;
    }

    get tailLineY() {
        return this._tailLineY;
    }

    set tailLineY(line) {
        this._tailLineY = line;
    }

    get REF_NODE_ROUNDED() {
        return this._REF_NODE_ROUNDED;
    }

    get REF_LINE_THICKNESS() {
        return this._REF_LINE_THICKNESS;
    }

    get REF_LINE_COLOR() {
        return this._REF_LINE_COLOR;
    }


    get REF_LINE_WIDTH() {
        return (this.WIDTH - this.HEAD_WIDTH)/2  + this.GAP;
    }

    get ROUNDED() {
        return this._ROUNED;
    }


    get STROKE() {
        return this._STROKE;
    }

    get STROKE_WIDTH() {
        return this._STROKE_WIDTH;
    }

    get BG() {
        return this._BG;
    }

    get HEAD_BG() {
        return this._HEAD_BG;
    }

    get TAIL_BG() {
        return this._TAIL_BG;
    }

    get HEAD_WIDTH() {
        return this._HEAD_WIDTH;
    }

    get HEAD_HEIGHT() {
        return this._HEAD_HEIGHT;
    }

    get WIDTH() {
        return this._WIDTH;
    }

    get HEIGHT() {
        return this._HEIGHT;
    }

    get x() {
        return this.startX - this.GAP - this.WIDTH;
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

    get startX() {
        return this._startX;
    }

    set startX(x) {
        this._startX = x;
    }

    get startY() {
        return this._startY;
    }

    set startY(y) {
        this._startY = y;
    }

    get GAP() {
        return this._GAP;
    }

    get nElement() {
        return this._nElement;
    }

    set nElement(num) {
        this._nElement = num;
    }

    isEmpty() {
        return this.head == null;
    }


    get head() {
        return this._head;
    }

    set head(h) {
        this._head = h;
    }

    get tail() {
        return this._tail;
    }

    set tail(t) {
        this._tail = t;
    }

    insertFirst(value) {
        const newNode = new Node(value, this.startX, this.startY);
        if (this.isEmpty())
            this.tail = newNode;
        else  {
            newNode.next = this.head;
            this.updatePos(newNode.next, newNode.WIDTH + this.GAP);
        }
        this.head = newNode;
        this.nElement++;
    }

    insertLast(value) {
        const newNode = new Node(value, this.startX, this.startY);
        if (this.isEmpty()) {
            this.head = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.x = this.tail.x + newNode.WIDTH+ this.GAP;
        }
        this.tail = newNode;
        this.nElement++;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.nElement) {
            throw new Error("Index out of bound");
        }
        if (index == 0) {
            this.insertFirst(value);
        }
        else if (index == this.nElement) {
            this.insertLast(value);
        }
        else {
            const newNode = new Node(value, this.startX, this.startY);
            let current = this.head;
            let previous = current;
            let i = 0;
            while (i < index) {
                i++;
                previous = current;
                current = current.next;
            }
            previous.next = newNode;
            newNode.next = current;
            newNode.x = previous.x + this.GAP + newNode.WIDTH;
            this.updatePos(current, this.GAP + newNode.WIDTH);
            this.nElement++;
        }
    }

    updatePos(startNode, amountX) {
        let current = startNode;
        while (current != null) {
            current.x = current.x + amountX;
            current = current.next;
        }
    }

    clone() {
        let current = this.head;
        const list = new LinkedList();
        let i = 0;
        while (current != null) {
            list.insertAt(current.value, i++);
            current = current.next;
        }
        return list;
    }
}

