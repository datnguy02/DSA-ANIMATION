import { node_size } from "../../../../assets/size/sll_size";

export class TravelNode {
    constructor(listToTravel, textColor, stroke, bg) {

        this._startX = listToTravel.x + (listToTravel.WIDTH/2 - listToTravel.HEAD_WIDTH/2);
        this._startY = listToTravel.y - (listToTravel.HEIGHT/2 - listToTravel.HEAD_HEIGHT + listToTravel.HEAD_HEIGHT + node_size["STROKE_WIDTH"]);
        this._LINE_HEIGHT = listToTravel.HEIGHT/2 - listToTravel.HEAD_HEIGHT + listToTravel.HEAD_HEIGHT;

        // dom element reference
        this._nodeContainer = null;
        this._textNode = null;
        this._domNode = null;
        this._connectLine = null;
        this._wrapper = null;

        // styling
        this._BG = bg;
        this._STROKE = stroke;
        this._TEXT = textColor;

        // size 
        this._WIDTH = node_size["REF_NODE_WIDTH"];
        this._HEIGHT = node_size["REF_NODE_HEIGHT"];
        this._ROUND = node_size["REF_NODE_RAD"];
        this._STROKE_WIDTH = node_size["STROKE_WIDTH"];
    }

    get wrapper() {
        return this._wrapper;
    }
    
    set wrapper(w) {
        this._wrapper = w;
    }

    get LINE_HEIGHT() {
        return this._LINE_HEIGHT;
    }

    set LINE_HEIGHT(height) {
        this._LINE_HEIGHT = height;
    }

    get STROKE_WIDTH() {
        return this._STROKE_WIDTH;
    }


    get HEIGHT() {
        return this._HEIGHT;
    }


    get WIDTH() {
        return this._WIDTH;
    }

    get ROUND() {
        return this._ROUND;
    }

    get BG() {
        return this._BG;
    }

    get STROKE() {
        return this._STROKE;
    }

    get TEXT() {
        return this._TEXT;
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

    get nodeContainer() {
        return this._nodeContainer;
    }

    set nodeContainer(node) {
        this._nodeContainer = node;
    }

    get domNode() {
        return this._domNode;
    }

    set domNode(node) {
        this._domNode = node;
    }

    get textNode() {
        return this._textNode;
    }

    set textNode(node) {
        this._textNode = node;
    }

    get connectLine() {
        return this._connectLine;
    }

    set connectLine(line) {
        this._connectLine = line;
    }

    getLineAttr(amountY1, amountY2) {
        return `M${this.WIDTH/2} ${this.HEIGHT + amountY1}
                L${this.WIDTH/2} ${this.HEIGHT + amountY2}
        `;
    }

    shrinkLine(tl, pos) {
        tl.to(this.connectLine, {
            attr: {
                d: `${this.getLineAttr(this.LINE_HEIGHT, this.LINE_HEIGHT)}`,
                "stroke-linecap": "",
            }
        }, pos);
        return tl;
    }

    shrinkLineTo(tl, x, y, pos) {
        tl.to(this.connectLine, {
            attr: {
                d: `M${x} ${y}
                    L${x} ${y}`
            }
        }, pos);
        return tl;
    }
    
    expandLineUpWard(tl, pos) {
         tl.to(this.connectLine, {
            attr: {
                d: `${this.getLineAttr(this.LINE_HEIGHT, 0)}`,
            }
        }, pos);
        return tl;
    }

    expandLineDownWard(tl, pos) {
         tl.to(this.connectLine, {
            attr: {
                d: `${this.getLineAttr(0, this.LINE_HEIGHT)}`,
            }
        }, pos);
        return tl;
    }

    scaleDown(tl, pos) {
        tl.fromTo(this.wrapper, {
            attr: {
                transform: "scale(1)"
            }
        }, {
            attr: {
                transform: "scale(0)"
            }
        }, pos);
    }

    scaleUp(tl, pos) {
        tl.to(this.wrapper, {
            attr: {
                transform: "scale(1)"
            }
        }, pos);
    }

    setNewPos(tl, x, y, pos) {
        tl.set(this.nodeContainer, {
            attr: {
                transform: `translate(${x}, ${y})`
            }
        }, pos);
        return tl;
    }

    setLineAttr(tl, x, y, pos) {
        tl.set(this.connectLine, {
            attr: {
                d: `M${this.WIDTH/2} ${this.HEIGHT}
                    L${this.WIDTH/2 + x} ${this.HEIGHT + y}
                `
            }
        }, pos)
    }

    setLineUpAttr(tl, x, y, pos) {
        tl.set(this.connectLine, {
            attr: {
                d: `M${this.WIDTH/2} ${-this._LINE_HEIGHT}
                    L${this.WIDTH/2 + x} ${-this._LINE_HEIGHT + y}`,
            }
        }, pos);
        return tl;
    }

    animeLineDown(tl, pos) {
        tl.to(this.connectLine, {
            attr: {
                d: `M${this.WIDTH/2} ${-this._LINE_HEIGHT}
                    L${this.WIDTH/2} 0`
            }
        }, pos);
        return tl;
    }

    fadeIn(tl, amount, pos) {
        tl.fromTo(this.nodeContainer, {
            attr: {
                opacity: 0,
                transform: `translate(${this.startX}, ${this.startY - amount})`,
            }
        }, {
            attr: {
                opacity: 1,
                transform: `translate(${this.startX}, ${this.startY})`
            },
        }, pos);
    }

    fadeOut(tl, amount, pos) {
         tl.to(this.nodeContainer, {
            attr: {
                opacity: 0,
                transform: `translate(${this.startX}, ${this.startY - amount})`,
            }
        }, pos);
        return tl;
    }

    moveUp(tl, amount, pos) {
        tl.to(this.nodeContainer, {
            attr: {
                transform: `translate(${this.startX}, ${this.startY - amount})`,
            }
        }, pos);
        return tl;
    }

    moveRight(tl, amount, pos) {
        tl.to(this.nodeContainer, {
            attr: {
                transform: `translate(${this.startX + amount}, ${this.startY})`,
            }
        }, pos);
        return tl;
    }


    setScalePoint(tl, point, pos) {
        tl.to(this.wrapper, {
            attr: {
                "transform-origin": point,
            }
        }, pos);
        return tl;
    }

    moveToNull(tl, node, pos) {
        this.startX = node.x + node.WIDTH + node.GAP - (this.WIDTH/2 - node.NULL_WIDTH/2);
        this.startY = node.y + node.refNodeY + (node.REF_NODE_HEIGHT/2 - node.NULL_HEIGHT/2) - this.LINE_HEIGHT - this.HEIGHT;
        this.setNewPos(tl, this.startX, this.startY, pos);
        this.expandLineUpWard(tl);
        this.scaleUp(tl);
        return tl;
    }

}