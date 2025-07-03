import colorway from "../../../../assets/color-style/sllStyle";
import treeNode_size from "../../../../assets/size/bst_size";

export class TravelNode {
    constructor(tree_to_travel) {
        this._tree = tree_to_travel;
        
        // style
        let color = colorway["binarysearchtree"];
        this._BG = color["CURRENT_BG"];
        this._STROKE = color["CURRENT_BORDER"];
        this._TEXT = color["CURRENT_TEXT"];

        // sizing
        this._WIDTH = treeNode_size["TRAVELER_WIDTH"];
        this._HEIGHT = treeNode_size["TRAVELER_HEIGHT"];
        this._ROUND = treeNode_size["ROUNDED"];
        this._STROKE_WIDTH = treeNode_size["STROKE_WIDTH"];
        this._TEXT_SIZE = treeNode_size["FONT_SIZE"];
        this._LINE_THICKNESS = treeNode_size["TRAVEL_LINE_THICKNESS"];

        // dom element reference
        this._container = null;
        this._node = null;
        this._line = null;
        this._wrapper = null;
    }



    get wrapper() {
        return this._wrapper;
    }

    set wrapper(node) {
        this._wrapper = node;
    }


    get LINE_THICKNESS() {
        return this._LINE_THICKNESS;
    }

    get container() {
        return this._container;
    }

    set container(container) {
        this._container = container;
    }

    get node() {
        return this._node;
    }

    set node(node) {
        this._node = node;
    }

    get line() {
        return this._line;
    }

    set line(line) {
        this._line = line;
    }

    get TEXT_SIZE() {
        return this._TEXT_SIZE;
    }

    get STROKE_WIDTH() {
        return this._STROKE_WIDTH;
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

    get ROUND() {
        return this._ROUND;
    }

    get WIDTH() {
        return this._WIDTH;
    }

    get HEIGHT() {
        return this._HEIGHT;
    }

    get tree() {
        return this._tree;
    }

    set tree(tree) {
        this._tree = tree;
    }

    get x() {
        return this.tree.root_x + this.tree.WIDTH * 2;
    }

    get y() {
        return this.tree.root_y;
    }

    getLineAttr(x1, y1, x2, y2) {
        return `M${this.WIDTH/2 + x1} ${this.HEIGHT + y1} L${this.WIDTH/2 + x2} ${this.HEIGHT + y2}`;
        
    }

    getLineHeight() {
        return this.tree.root.RADIUS * 2;
    }

    getInitialLineAttr() {
        const finalPointX = -1.5*this.WIDTH;
        const controlPointX = finalPointX/2;
        const curveLess = 100;
        return `M${this.WIDTH/2} 0 Q${controlPointX} ${-curveLess} ${finalPointX} 0`;
    }

    revealInitialLine(tl, pos) {
        tl.fromTo(this.line, {
            drawSVG: "0% 0%",
        }, {
            drawSVG: "0% 100%"
        }, pos);
        return tl;

    }



    fadeIn(tl, amount, pos) {
        tl.fromTo(this.container, {
            attr: {
                transform: `translate(${this.x}, ${this.y - amount})`,
                opacity: 0,
            }
        }, {
            attr: {
                transform: `translate(${this.x}, ${this.y})`,
                opacity: 1,
            }
        }, pos);
        return tl;
    }

    setTransformOrigin(tl, origin, pos) {
        tl.to(this.wrapper, {
            attr: {
                "transform-origin": origin,
            }
        }, pos);
        return tl;
    }

    scaleDown(tl, pos) {
        tl.to(this.wrapper, {
            attr: {
                transform: `scale(0)`
            }
        },  pos);
        return tl;
    }

    scaleUp(tl, pos) {
        tl.to(this.wrapper, {
            attr: {
                transform: "scale(1)",
            }
        }, pos);
        return tl;
    }

    shrinkLine(tl, isEnd, pos) {
        tl.to(this.line, {
            drawSVG: isEnd ? "100% 100%" : "0% 0%",
        }, pos);
        return tl;
    }

    setPosToNode(tl, node, isAbove, pos) {
        tl.set(this.container, {
            attr: {
                transform: `translate(${node.x - this.WIDTH/2}, ${node.y + this.tree.root.RADIUS + this.getLineHeight()})`
            }
        }, pos);
        return tl;
    }

    setLineAttr(tl, x1, y1, x2, y2, pos) {
        tl.set(this.line, {
            attr: {
                d: this.getLineAttr(x1, y1, x2, y2),
            },
            drawSVG: "0% 100%",
        }, pos);
        return tl;
    }

    moveLine(tl, x1, y1, x2, y2, pos) {
        tl.to(this.line, {
            attr: {
                d: this.getLineAttr(x1, y1, x2, y2),
            }
        }, pos);
        return tl;
    }



    
}