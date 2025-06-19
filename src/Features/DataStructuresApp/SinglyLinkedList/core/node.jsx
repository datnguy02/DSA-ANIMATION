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

        // dom Element reference
        this._domNode = null;
        this._nodeContainer = null;
        this._dataContainer = null;
        this._dataText = null;
        this._nextRef = null;
        this._nextRefText = null;
        this._refLine = null;
        this._nextNull = null;
        this._domNull = null;
        this._nullText = null;
        this._virtualRefLine = null;

        // size of node
        this._WIDTH = node_size["WIDTH"];
        this._HEIGHT = node_size["HEIGHT"];
        this._BORDER_RAD = node_size["NODE_BORDER_RAD"];
        this._REF_NODE_WIDTH = node_size["REF_NODE_WIDTH"];
        this._REF_NODE_HEIGHT = node_size["REF_NODE_HEIGHT"];
        this._REF_NODE_RAD = node_size["REF_NODE_RAD"];
        this._STROKE_WIDTH = node_size["STROKE_WIDTH"];
        this._REF_LINE_THICKNESS = node_size["REF_LINE_WIDTH"];
        this._GAP = node_size["GAP"];
        this._NULL_WIDTH = node_size["NULL_WIDTH"];
        this._NULL_HEIGHT = node_size["NULL_HEIGHT"];
        this._NULL_ROUND = node_size["NULL_ROUND"];

        // styling
        this._BG = colorway["NODE_BG"];
        this._REF_NODE_BG = colorway["NODE_REF_BG"];
        this._STROKE = colorway["NODE_BORDER"];
        this._REF_LINE_COLOR = colorway["REF_LINE"];
        this._CURRENT_LINE_COLOR = colorway["CURRENT_STROKE"];
        this._PREV_LINE_COLOR = colorway["PREV_STROKE"];
        

        this._NORMAL_STYLE = {
            BG: colorway["NODE_BG"],
            STROKE: colorway["NODE_REF_BG"],
            REF_BG: colorway["NODE_REF_BG"],
            TEXT: "white",
        };

        this._CURRENT_VISIT_STYLE = {
            BG: colorway["NODE_CURRENT_VISIT_BG"],
            STROKE: colorway["NODE_CURRENT_VISIT_STROKE"],
            REF_BG: colorway["REF_CURRENT_VISIT_BG"],
            TEXT: colorway["NODE_CURRENT_VISIT_TEXT"]
        };
        
        this._PREV_VISIT_STYLE = {
            BG: colorway["NODE_PREV_VISIT_BG"],
            STROKE: colorway["NODE_PREV_VISIT_STROKE"],
            REF_BG: colorway["REF_PREV_VISIT_BG"],
            TEXT: colorway["NODE_PREV_VISIT_TEXT"],
        }

        this._REF_NORMAL_STYLE = {
            BG: colorway["NODE_REF_BG"],
            TEXT: "white",
        }

        this._REF_CURRENT_VISIT_STYLE = {
            BG: colorway["REF_CURRENT_VISIT_BG"],
            TEXT: colorway["NODE_CURRENT_VISIT_TEXT"]
        }

        this._REF_PREV_VISIT_STYLE = {
            BG: colorway["PREV_STROKE"],
            TEXT: colorway["NODE_PREV_VISIT_TEXT"]
        }


        if (next == undefined)
            this._next = null;
    }
    
    get REF_PREV_VISIT_STYLE() {
        return this._REF_PREV_VISIT_STYLE;
    }


    get PREV_VISIT_STYLE() {
        return this._PREV_VISIT_STYLE;
    }

    get PREV_LINE_COLOR() {
        return this._PREV_LINE_COLOR;
    }

    get nullText() {
        return this._nullText;
    }

    set nullText(node) {
        this._nullText = node;
    }

    get domNull() {
        return this._domNull;
    }

    set domNull(node) {
        this._domNull = node;
    }

    get nullPosX() {
        return this.REF_NODE_WIDTH + this.REF_LINE_WIDTH;
    }

    get nullPosY() {
        return this.REF_NODE_HEIGHT/2 - this.NULL_HEIGHT/2;
    }

    get NULL_HEIGHT() {
        return this._NULL_HEIGHT;
    }

    get NULL_WIDTH() {
        return this._NULL_WIDTH;
    }

    get NULL_ROUND() {
        return this._NULL_ROUND;
    }

    get CURRENT_LINE_COLOR() {
        return this._CURRENT_LINE_COLOR;
    }


    get virtualRefLine() {
        return this._virtualRefLine;
    }

    set virtualRefLine(line) {
        this._virtualRefLine = line;
    }

    get REF_NORMAL_STYLE() {
        return this._REF_NORMAL_STYLE;
    }

    get REF_CURRENT_VISIT_STYLE() {
        return this._REF_CURRENT_VISIT_STYLE;
    }

    get nextNull() {
        return this._nextNull;
    }

    set nextNull(node) {
        this._nextNull = node;
    }

    get CURRENT_VISIT_STYLE() {
        return this._CURRENT_VISIT_STYLE;
    }

    get NORMAL_STYLE() {
        return this._NORMAL_STYLE;
    }

    get refLine() {
        return this._refLine;
    }

    set refLine(line) {
        this._refLine= line;
    }

    get nextRefText() {
        return this._nextRefText;
    }

    set nextRefText(node) {
        this._nextRefText = node;
    }

    get nodeContainer() {
        return this._nodeContainer;
    }

    set nodeContainer(node) {
        this._nodeContainer = node;
    }


    get dataText() {
        return this._dataText
    }

    set dataText(node) {
        this._dataText = node;
    }

    get nextRef() {
        return this._nextRef
    }

    set nextRef(node) {
        this._nextRef = node;
    }

    get dataContainer() {
        return this._dataContainer
    }

    set dataContainer(node) {
        this._dataContainer = node;
    }

    get dataPosX() {
        return this.WIDTH/2 - this.REF_NODE_WIDTH/2;
    }

    get dataPosY() {
        return this.HEIGHT/2 - this.REF_NODE_HEIGHT;
    }

    get refNodeX() {
        return this.WIDTH/2 - this.REF_NODE_WIDTH/2;
    }
    
    get refNodeY() {
        return this.HEIGHT/2 + this.REF_NODE_HEIGHT/3;
    }

    get domNode() {
        return this._domNode;
    }

    set domNode(node) {
        this._domNode = node;
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

    get id() {
        return this._id;
    }

    set id(ID) {
        this._id = ID;
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

    getRefLineAttr(amountX, amountY) {
        return `M${this.REF_NODE_WIDTH} ${this.REF_NODE_HEIGHT/2} 
                L${this.REF_NODE_WIDTH + amountX} ${this.REF_NODE_HEIGHT/2 + amountY}`;
    }

    getRefLineAttrY(amountX, amountY) {
         return `M${this.REF_NODE_WIDTH + amountX} ${this.REF_NODE_HEIGHT/2 + amountY} 
                L${this.REF_NODE_WIDTH + this.REF_LINE_WIDTH} ${this.REF_NODE_HEIGHT/2}`;
    }

    changeStyle(tl, style, noRef, pos) {
        const {BG, STROKE, TEXT, REF_BG} = style;
        let fields = [this.dataContainer, this.nextRef];
        let texts = [this.dataText, this.nextRefText];
        if (noRef) {
            fields.pop();
            texts.pop();
        }
        tl.to(this.domNode, {attr: {fill: BG, stroke: STROKE}}, pos)
        .to(fields, {attr: {fill: REF_BG}}, "<")
        .to(texts, {attr: {fill: TEXT}}, "<")
        return tl;
    }


    animeRefStyle(tl, style, pos) {
        const {BG, TEXT} = style;
        tl.to(this.nextRef, {
            attr: {
                fill: BG,
            }
        }, pos)
        .to(this.nextRefText, {
            attr: {
                fill: TEXT,
            }
        }, "<");
        return tl;
    }

    setVirtualLineColor(tl, color, pos) {
        tl.set(this.virtualRefLine, {
            attr: {
                stroke: color,
            }
        }, pos);
        return tl;
    }

    setLineTip(tl, line, style, pos) {
        tl.set(line, {
            attr: {
                "stroke-linecap": style,
            }
        }, pos);
        return tl;
    }

    moveRefLine(tl, line, x, y, pos) {
        tl.to(line, {
            attr: {
                d: `${this.getRefLineAttr(x, y)}`
            }
        }, pos);
        return tl;
    }

    moveFirstPointOfLine(tl, line, x, y, pos) {
        tl.to(line, {
            attr: {
                d: `${this.getRefLineAttrY(x, y)}`
            }
        }, pos);
        return tl;
    }

    shrinkLineTo(tl, line, x, y, pos) {
        tl.to(line, {
            attr: {
                d: `M${x} ${y} L${x} ${y}`,
            }
        }, pos);
        return tl;
    }

    moveUp(tl, amount, pos) {
        tl.to([this.nextRef, this.nextRefText, this.dataContainer, this._dataText, this.domNode], {
            attr: {
                transform: `translate(${0}, ${-amount})`
            }
        }, pos);
        return tl;
    }

    moveDown(tl, amount, pos) {
         tl.to([this.nextRef, this.nextRefText, this.dataContainer, this._dataText, this.domNode], {
            attr: {
                transform: `translate(${0}, ${0})`
            }
        }, pos);
        return tl;
    }
    
    animeResetPos(tl, pos) {
        tl.to(this.nodeContainer, {
            attr: {
                transform: `translate(${this.x}, ${this.y}) scale(1)`,
            }
        }, pos);
        return tl;
    }

    moveRight(tl, amount, pos) {
        tl.to(this.nodeContainer, {
            attr: {
                transform: `translate(${this.x + amount}, ${this.y})`,
            }
        }, pos);
        return tl;
    }

    setNullPos(tl, x, y, pos) {
        tl.set(this.nextNull, {
            attr: {
                transform: `translate(${x}, ${y})`,
            }
        }, pos);
        return tl;
    }

    animeNullStyle(tl, style, pos) {
        const {BG, TEXT} = style;
        tl.to(this.domNull, {
            attr: {
                fill: BG,
            }
        }, pos)
        .to(this.nullText, {
            attr: {
                fill: TEXT,
            }
        }, "<");
        return tl;
    }

    resetLineAttr(tl, line, pos) {
        tl.set(line, {
            attr: {
                d: `${this.getRefLineAttr(0, 0)}`,
            }
        }, pos);
        return tl;
    }

    setLineAttr(tl, line, x1, y1, x2, y2, pos) {
        tl.set(line, {
            attr: {
                d: `M${x1} ${y1} L${x2} ${y2}`,
            }
        }, pos);
        return tl;
    }

    setScalePoint(tl, point, pos) {
        tl.to(this.nodeContainer, {
            attr: {
                "transform-origin": point,
            }
        }, pos);
        return tl;
    }

    scaleDown(tl, pos) {
        tl.fromTo(this.nodeContainer, {
            attr: {
                transform: `${this.nodeContainer.getAttribute("transform")} scale(1)`,
            }
        }, {
            attr: {
                transform: `${this.nodeContainer.getAttribute("transform")} scale(0)`,
            }
        },
        pos);
        return tl;
    }

    moveLeft(tl, amount, pos) {
        tl.to(this.nodeContainer, {
            attr: {
                transform: `translate(${this.x - amount}, ${this.y})`,
            }
        }, pos);
        return tl;
    }

    moveNullFromTo(tl, amountX, amountY, opacity1, opacity2, pos) {
        tl.fromTo(this.nextNull, {
            attr: {
                transform: `translate(${this.nullPosX + amountX}, ${this.nullPosY + amountY})
                            scale(${opacity1})
                `,
            }
        }, {
            attr: {
                transform: `translate(${this.nullPosX}, ${this.nullPosY}) scale(${opacity2})`,
            }
        }, pos);
        return tl;
    }

    animeNullOpacity(tl, opacity, pos) {
        tl.to(this.nextNull, {
            attr: {
                opacity: opacity,
            }
        }, pos);
        return tl;
    }

    setNullOpacity(tl, opacity, pos) {
        tl.set(this.nextNull, {
            attr: {
                opacity: opacity,
            }
        }, pos);
        return tl;
    }

    setPos(tl, position, pos) {
        tl.set(this.nodeContainer, {
            attr: {
                transform: `${position}`,
            }
        }, pos);
        return tl;
    }

    animePos(tl, position, pos) {
        tl.to(this.nodeContainer, {
            attr: {
                transform: `${position}`,
            }
        },pos);
        return tl;
    }
    
    expandRefLineTo(tl, line, x, y, pos) {
        tl.fromTo(line, {
            attr: {
                d: `${this.getRefLineAttr(0, 0)}`
            }
        }, {
            attr: {
                d: `${this.getRefLineAttr(x, y)}`,
            }
        }, pos);
        return tl;
    }

    scaleUp(tl, x, y, pos) {
        tl.fromTo(this.nodeContainer, {
            attr: {
                transform: `translate(${x}, ${y}) scale(0)`,
            }
        }, {
            attr: {
                transform: `translate(${x}, ${y}) scale(1)`,
            }
        }, pos);
        return tl;
    }

}