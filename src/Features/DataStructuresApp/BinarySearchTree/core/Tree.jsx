import colorway from "../../../../assets/color-style/sllStyle";
import treeNode_size from "../../../../assets/size/bst_size";
import Node from "../Node";
import { TreeNode } from "./TreeNode";

export class Tree {
    constructor() {
        this._root = null;
        this._nElement = 0;
        this._startX = 0;
        this._startY = 300;
        this._height = 7;
        this._SCALE = 36;
        this._LEVEL_HEIGHT = 300;

        // style
        let color = colorway["binarysearchtree"];
        this._BG = color["NODE_BG"];
        this._STROKE = color["NODE_BORDER"];
        this._TEXT = color["NODE_TEXT"];
        this._CURRENT_LINE_COLOR = color["CURRENT_BORDER"];


        // sizing
        this._WIDTH = treeNode_size["ROOT_WIDTH"];
        this._HEIGHT = treeNode_size["ROOT_HEIGHT"];
        this._STROKE_WIDTH = treeNode_size["ROOT_STROKE_WIDTH"];
        this._ROUND = treeNode_size["ROUNDED"];
        this._NODE_RADIUS  = treeNode_size["RADIUS"];
        this._LINE_THICKNESS = treeNode_size["LINE_THICKNESS"];
        this._TRAVEL_LINE_THICKNESS = treeNode_size["TRAVEL_LINE_THICKNESS"];

        // dom element reference
        this._container = null;
        this._domRoot = null;
        this._text = null;
        this._rootLine = null;
        this._virtualRootLine = null;

        this._STYLE = {
            BG: color["NODE_BG"],
            BORDER: color["NODE_BORDER"],
            TEXT: color["NODE_TEXT"],
        }
    }

    get TRAVEL_LINE_THICKNESS() {
        return this._TRAVEL_LINE_THICKNESS;
    }

    get CURRENT_LINE_COLOR() {
        return this._CURRENT_LINE_COLOR;
    }


    get LINE_THICKNESS() {
        return this._LINE_THICKNESS;
    }

    get STYLE() {
        return this._STYLE;
    }

    get container() {
        return this._container;
    }

    set container(node) {
        this._container = node;
    }

    get domRoot() {
        return this._domRoot;
    }

    set domRoot(node) {
        this._domRoot = node;
    }

    get text() {
        return this._text;
    }

    set text(node) {
        this._text = node;
    }

    get rootLine() {
        return this._rootLine;
    }

    set rootLine(line) {
        this._rootLine = line;
    }

    get virtualRootLine() {
        return this._virtualRootLine;
    }

    set virtualRootLine(line) {
        this._virtualRootLine = line;
    }

    get LINE_THICKNESS() {
        return this._LINE_THICKNESS;
    }

    get NODE_RADIUS() {
        return this._NODE_RADIUS;
    }

    get ROOT_LINE_WIDTH() {
        return this.NODE_RADIUS*2;
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

    get STROKE_WIDTH() {
        return this._STROKE_WIDTH;
    }


    get LEVEL_HEIGHT() {
        return this._LEVEL_HEIGHT;
    }

    get SCALE() {
        return this._SCALE;
    }

    get height() {
        return this._height;
    }

    get startX() {
        return this._startX;
    }

    get startY() {
        return this._startY;
    }

    get root() {
        return this._root;
    }

    set root(root) {
        this._root = root;
    }

    get nElement() {
        return this._nElement;
    }

    set nElement(num) {
        this._nElement = num;
    }

    get root_x() {
        return this.root.x - this.WIDTH/2
    }

    get root_y() {
        return this.root.y - this.NODE_RADIUS - this.HEIGHT - this.ROOT_LINE_WIDTH;
    }

    getlineStartingPoint() {
        return {x: this.WIDTH/2, y: this.HEIGHT};
    }


    isEmpty() {
        return this._root === null;
    }

    insert(value) {
        const newNode = new TreeNode(value, 
                                    this.startX, 
                                    this.startY, 
                                    0, 
                                    0, 
                                    this.LEVEL_HEIGHT, 
                                    this.height, 
                                    this.SCALE, 
                                    this.startX);
        if (this.isEmpty()) {
            this.root = newNode;
            this.nElement++;
            newNode.x = ((2**(this.height - 1))  * this.SCALE) + this.startX;
            return `Successful insert ${value} at the root`
        }
        let parent = null;
        let current = this.root;
        let isLeft = false;
        while (current !== null) {
            parent = current;
            if (current.value > value) {
                current = current.left;
                isLeft = true;
            }
            else {
                current = current.right;
                isLeft = false;
            }
        }
        if (parent.level + 1 > this.height - 3)
            return `Fail`
        if (isLeft) 
            parent.left = newNode;
        else 
            parent.right =  newNode;
        newNode.parent = parent;
        newNode.level = parent.level + 1;
        newNode.index = isLeft ? parent.index * 2 : (parent.index * 2 + 1);
        const {x, y} = parent.getChildPos(isLeft);
        newNode.x = x;
        newNode.y = y;
        this.nElement++;
        return `Succesfull insert ${value} to the tree`
    }    

    search(value) {
        if (this.isEmpty())
            return `The tree is empty, please insert value first`;
        let current = this.root;
        while (current !== null) {
            if (current.value === value)
                return `Found ${value}`;
            else if (current.value > value)
                current = current.left;
            else
                current = current.right;
        }
        return `There is no nodes with value ${value} in the tree`;
    }

    inorder() {
        this.runInOrder(this.root);
    }

    runInOrder(node) {
        if (node !== null) {
            this.runInOrder(node.left);
            this.runInOrder(node.right);
        }
    }

    clone() {
        const newTree = new Tree();
        const helper = (node, parent) => {
            if (node !== null) {
                const newNode = new TreeNode(node.value, node.x, node.y, node.level, node.index, node.vertical_gap, this.height, this.SCALE, this.startX);
                newNode.parent = parent;
                newNode.left = helper(node.left, newNode);
                newNode.right = helper(node.right, newNode);
                return newNode;
            }
            return null;
        };
        newTree.root = helper(this.root, null);
        return newTree;
    }


    getJSXs() {
        const helper = (node, list) => {
            if (node !== null) {
                list.push(<Node node={node}/>);
                helper(node.left, list);
                helper(node.right, list);
            }
        };
        const res = [];
        helper(this.root, res);
        return res;
    }

    animeRootStyle(tl, style, pos) {
        const {BG, TEXT, BORDER} = style;
        tl.to(this.domRoot, {
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

    setLineColor(tl, line, color, pos) {
        tl.set(line, {
            attr: {
                stroke: color,
            }
        }, pos);
        return tl;
    }

    expandLine(tl, line, length, pos) {
        const {x, y} = this.getlineStartingPoint();
        tl.to(line, {
            morphSVG: `M${x} ${y} L${x} ${y + length}`,
        }, pos);
        return tl;
    }

    shrinkLine(tl, line, isEnd,pos) {
        tl.to(line, {
            drawSVG: isEnd ? "100% 100%" : "0% 0%",
        }, pos);
        return tl;
    }


    blurSubTree(tl, node, opacity, pos) {
        const helper = (the_node) => {
            if (the_node !== null) {
                the_node.animeContainerOpacity(tl, opacity, "<");
                helper(the_node.left);
                helper(the_node.right);
            }
        }

        helper(node);
        return tl;
    }



    

    
}

