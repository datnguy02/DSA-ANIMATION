import { Node } from "./node";
import { node_size } from "../../../../assets/size/sll_size";
import colorway from "../../../../assets/color-style/sllStyle";

export class LinkedList {
    constructor () {
        this._head = null;
        this._tail = null;
        this._nElement = 0;

        // Size and position
        this._GAP = node_size["GAP"];
        this._y = 300;
        this._startX = 300;
        this._startY = 300;
        this._WIDTH = node_size["WIDTH"];
        this._HEIGHT = node_size["HEIGHT"];
        this._HEAD_WIDTH = node_size["REF_NODE_WIDTH"];
        this._HEAD_HEIGHT = node_size["REF_NODE_HEIGHT"];
        this._STROKE_WIDTH = node_size["STROKE_WIDTH"];
        this._ROUNED = node_size["NODE_BORDER_RAD"];
        this._REF_LINE_THICKNESS = node_size["STROKE_WIDTH"]
        this._REF_NODE_ROUNDED = node_size["REF_NODE_RAD"];
        this._TAIL_LINE_Y_HEIGHT = 280;

        // styling
        this._BG = colorway["LIST_BG"];
        this._HEAD_BG = colorway["HEAD_BG"];
        this._TAIL_BG = colorway["TAIL_BG"];
        this._STROKE = colorway["NODE_BORDER"];
        this._REF_LINE_COLOR = colorway["REF_LINE"];
        this._HEAD_CURRENT_VISIT_COLOR = colorway["HEAD_CONTROL_BG"];
        this._Head_CURRENT_VISIT_TEXT = colorway["HEAD_CONTROL_TEXT"];
        this._VIRTUAL_TAIL_LINE_COLOR = colorway["HEAD_CONTROL_BG"];
        this._VIRTUAL_TAIL_LINE_PREV_COLOR = colorway["HEAD_PREV_BG"];

        this._HEAD_NORMAL_STYLE = {
            BG: colorway["HEAD_BG"],
            TEXT: "white"
        }

        this._HEAD_CURRENT_VISIT_STYLE = {
            BG: colorway["HEAD_CONTROL_BG"],
            TEXT: colorway["HEAD_CONTROL_TEXT"],
        }

        this._HEAD_PREV_VISIT_STYLE = {
            BG: colorway["HEAD_PREV_BG"],
            TEXT: colorway["HEAD_PREV_TEXT"],
        }

        this._TAIL_NORMAL_STYLE = {
            BG: colorway["HEAD_BG"],
            TEXT: "white"
        }

        this._TAIL_VISIT_STYLE = {
            BG: colorway["HEAD_CONTROL_BG"],
            TEXT: colorway["HEAD_CONTROL_TEXT"],
        }

        

         // actual dom reference
        this._tailLineY = null;
        this._tailLineX = null;
        this._headRef = null;
        this._tailRef = null;
        this._headRefTetxt = null;
        this._tailRefText = null;
        this._headLine = null;
        this._virtualHeadLine = null;
        this._virtualTailLineY = null;
        
    }

    get VIRTUAL_TAIL_LINE_PREV_COLOR() {
        return this._VIRTUAL_TAIL_LINE_PREV_COLOR;
    }

    get HEAD_PREV_VISIT_STYLE() {
        return this._HEAD_PREV_VISIT_STYLE;
    }

    get VIRTUAL_TAIL_LINE_COLOR() {
        return this._VIRTUAL_TAIL_LINE_COLOR;
    }

    get TAIL_LINE_Y_HEIGHT() {
        return this._TAIL_LINE_Y_HEIGHT;
    }

    get virtualTailLineY() {
        return this._virtualTailLineY;
    }

    set virtualTailLineY(line) {
        this._virtualTailLineY = line;
    }


    get TAIL_NORMAL_STYLE() {
        return this._TAIL_NORMAL_STYLE;
    }

    get TAIL_VISIT_STYLE() {
        return this._TAIL_VISIT_STYLE;
    }

    get HEAD_CURRENT_VISIT_BG() {
        return this._HEAD_CURRENT_VISIT_COLOR;
    }

    get HEAD_CURRENT_VISIT_TEXT() {
        return this._Head_CURRENT_VISIT_TEXT;
    }

    get HEAD_NORMAL_STYLE() {
        return this._HEAD_NORMAL_STYLE;
    }

    get HEAD_CURRENT_VISIT_STYLE() {
        return this._HEAD_CURRENT_VISIT_STYLE;
    }
    get virtualHeadLine() {
        return this._virtualHeadLine;
    }

    set virtualHeadLine(line) {
        this._virtualHeadLine = line;
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

    get TAIL_LINE_Y_WIDTH() {
        if (this.isEmpty())
            return null;
        return (this.tail.x + this.tail.WIDTH/2) - (this.x + this.WIDTH/2)
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

    /*
        |  <-- first part of tail line y Attribute
        |
    
    */


    shrinkEntireLine(tl, line, pos) {
        tl.to(line, {
            attr: {
                d: `${line.getAttribute("d")}`
            }
        }, pos);
        return tl;
    }

    getTailLineYVerticalAttr() {
        return `M${this.HEAD_WIDTH/2} ${this.HEAD_HEIGHT} 
                L${this.HEAD_WIDTH/2} ${this.TAIL_LINE_Y_HEIGHT}
                L${this.HEAD_WIDTH/2} ${this.TAIL_LINE_Y_HEIGHT}
                L${this.HEAD_WIDTH/2} ${this.TAIL_LINE_Y_HEIGHT}
                `;
    }

    animeFirstPartOfTailLineY(tl, line, pos) {
        tl.to(line, {
            attr: {
                d: `${this.getTailLineYVerticalAttr()}`,
            }
        }, pos);
        return tl;
    }

    /*
        |
        |___________________
    
    */
    getTailLineYHorizontalAttr(amount) {
        return `M${this.HEAD_WIDTH/2} ${this.HEAD_HEIGHT} 
                L${this.HEAD_WIDTH/2} ${this.TAIL_LINE_Y_HEIGHT}
                L${this.HEAD_WIDTH/2 + this.TAIL_LINE_Y_WIDTH + amount} ${this.TAIL_LINE_Y_HEIGHT}
                L${this.HEAD_WIDTH/2 + this.TAIL_LINE_Y_WIDTH + amount} ${this.TAIL_LINE_Y_HEIGHT}
                `;
    }

    animeSecondPart(tl, line, amount,pos) {
        tl.to(line, {
            attr: {
                d: `${this.getTailLineYHorizontalAttr(amount)}`,
            }
        }, pos);
        return tl;
    }

    /*
        |                    |
        |____________________|
    */
    getTailLineYAttr(amount) {
        return `M${this.HEAD_WIDTH/2} ${this.HEAD_HEIGHT} 
                L${this.HEAD_WIDTH/2} ${this.TAIL_LINE_Y_HEIGHT}
                L${this.HEAD_WIDTH/2 + this.TAIL_LINE_Y_WIDTH + amount} ${this.TAIL_LINE_Y_HEIGHT}
                L${this.HEAD_WIDTH/2 + this.TAIL_LINE_Y_WIDTH + amount} ${this.HEAD_HEIGHT}`
    }

    
    
    getVerticalTailLineYAttr(amount) {
         return `M${this.HEAD_WIDTH/2} ${this.HEAD_HEIGHT} 
                L${this.HEAD_WIDTH/2} ${this.TAIL_LINE_Y_HEIGHT}
                L${this.HEAD_WIDTH/2 + this.TAIL_LINE_Y_WIDTH} ${this.TAIL_LINE_Y_HEIGHT}
                L${this.HEAD_WIDTH/2 + this.TAIL_LINE_Y_WIDTH} ${this.HEAD_HEIGHT + amount}`;
    }

    getHeadLineAttr(amountX, amountY) {
        return `M${this.HEAD_WIDTH} ${this.HEAD_HEIGHT/2} 
                L${this.HEAD_WIDTH + amountX} ${this.HEAD_HEIGHT/2 + amountY}`
    }

    getHeadLineAttrY(amountX, amountY) {
        return `M${this.HEAD_WIDTH + amountX} ${this.HEAD_HEIGHT/2 + amountY} 
                L${this.HEAD_WIDTH + this.REF_LINE_WIDTH} ${this.HEAD_HEIGHT/2}`;
    }

    getHeadLineAttrAfterMovingFirstPoint(x, y, amountX, amountY) {
         return `M${this.HEAD_WIDTH + x} ${this.HEAD_HEIGHT/2 + y} 
                L${this.HEAD_WIDTH + amountX} ${this.HEAD_HEIGHT/2 + amountY}`
    }

    insertFirst(value) {
        const newNode = new Node(value, this.startX, this.startY, null, this.getRandomId());
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
        const newNode = new Node(value, this.startX, this.startY, null, this.getRandomId());
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
            const newNode = new Node(value, this.startX, this.startY, null,this.getRandomId());
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

    delete(value) {
        let current = this.head;
        let prev = this.head;
        while (current !== null) {
            if (current.value === value) 
                break;
            prev = current;
            current = current.next;
        }
        if (current === null) 
            return;
        if (current === this.head) {
            this.head = current.next;
        }
        else if (current === this.tail) {
            prev.next = current.next;
            this.tail = prev;
        }
        else {
            prev.next = current.next;
        }
        
        if (current.next !== null) {
            this.updatePos(current.next, -(current.next.GAP + current.next.WIDTH));
        }
        this.nElement--;
    }
    
    search(value) {
        let current = this.head;
        let i = 0;
        let result = {
            nodes: [],
            index: -1,
        };
        while (current !== null) {
            result.nodes.push(current);
            if (current.value === value) {
                result.index = i;
                return result;
            }
            current = current.next;
            i++;
        }
        return result;
    }

    getRandomId() {
        return Math.round(Math.random() * 1000000000);
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


    // anime function
    changeHeadStyle(tl, style, pos) {
        const {BG, TEXT} = style;

        tl.to(this.headRef, {attr: {fill: BG}}, pos)
        .to(this.headRefText, {attr: {fill: TEXT}}, "<");

        return tl;
    }

    changeTailStyle(tl, style, pos) {
        const {BG, TEXT} = style;
        
        tl.to(this.tailRef, {attr: {fill: BG}}, pos)
        .to(this.tailRefText, {attr: {fill: TEXT}}, "<");
        return tl;
    }

    stretchHeightOfTailLineY(tl, amount, pos) {
        tl.to(this.tailLineY, {
            attr: {
                d: `${this.getVerticalTailLineYAttr(amount)}`
            }
        }, pos);
        return tl;
    }

    moveFirstPointOfHeadLine(tl, amountX, amountY, pos) {
        tl.to(this.headLine, {
            attr: {
                d: `${this.getHeadLineAttrY(amountX, amountY)}`
            }
        }, pos);
        return tl;
    }

    moveSecondPointOfHeadLine(tl, amountX, amountY, pos) {
         tl.to(this.headLine, {
            attr: {
                d: `${this.getHeadLineAttr(amountX, amountY)}`
            }
        }, pos);
        return tl;
    }
    moveSecondPointOfVirtualHeadLine(tl, amountX, amountY, pos) {
         tl.to(this.virtualHeadLine, {
            attr: {
                d: `${this.getHeadLineAttr(amountX, amountY)}`
            }
        }, pos);
        return tl;
    }

    shrinkHeadLineTo(tl, line, x, y, pos) {
        tl.to(line, {
            attr: {
                d: `${this.getHeadLineAttrY(x, y)}`,
            }
        }, pos);
        return tl;
    }

    setHeadAttr(tl, line, x, y, pos) {
        tl.set(line, {
            attr: {
                d: `${this.getHeadLineAttr(x, y)}`,
            }
        }, pos);
        return tl;
    }

    animeTailLineWidth(tl, amount, pos) {
        tl.to(this.tailLineY, {
            attr: {
                d: `${this.getTailLineYAttr(amount)}`,
            }
        }, pos);
        return tl;
    }

    animeVirtualTailLineWidth(tl, amount, pos) {
        tl.to(this.virtualTailLineY, {
            attr: {
                d: `${this.getTailLineYAttr(amount)}`,
            }
        }, pos);
        return tl;
    }
    
    morphTailLineWidth(tl, amount, pos) {
        tl.fromTo(this.tailLineY, {
            attr: {
                d: `${this.getTailLineYAttr(amount)}`,
            }
        }, {
            attr: {
                d: `${this.tailLineY.getAttribute("d")}`
            }
        }, pos);
        return tl;
    }

    moveListNodes(tl, amount,startNode, pos) {
        tl.to(this.headRef, {}, pos);
        let current = startNode;
        while (current !== null) {
            current.moveLeft(tl, amount, "<");
            current = current.next;
        }
        return tl;
    }

    setTailLineYAttr(tl, amount, pos) {
        tl.set(this.tailLineY, {
            attr: {
                d: `${this.getTailLineYAttr(amount)}`,
            }
        }, pos);
        return tl;
    }

    shrinkThirdPartOfTailLineY(tl, line, changeAmount, pos) {
        tl.to(line, {
            attr: {
                d: `${this.getTailLineYHorizontalAttr(changeAmount)}`
            }
        }, pos);
        return tl;
    }

    animeLineTip(tl, line, style, pos) {
        tl.to(line, {
            attr: {
                "stroke-linecap": style,
            }
        }, pos);
        return tl;
    }

    

}

