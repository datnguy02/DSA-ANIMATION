import Node from "../Node";
import { TreeNode } from "./TreeNode";

export class Tree {
    constructor() {
        this._root = null;
        this._nElement = 0;
        this._startX = 900;
        this._startY = 300;
        this._height = 7;
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


    isEmpty() {
        return this._root === null;
    }

    insert(value) {
        const newNode = new TreeNode(value, this.startX, this.startY, 0);
        if (this.isEmpty()) {
            this.root = newNode;
            this.nElement++;
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
        newNode.parent = parent;
        newNode.level = parent.level + 1;
        // newNode.y = parent.y + 300;
        // let gap = 2**(this.height - newNode.level) * 45;
        if (isLeft) {
            // newNode.x = parent.x - gap/2;
            parent.left = newNode;
        }
        else {
            // newNode.x = parent.x + gap/2;
            parent.right = newNode;
        }
        let p = 2**(this.height - newNode.level - 1);
        var px = 2 * (p / 2 + ((isLeft) ? - parent.x : parent.x) * p - 2**(this.height - 2) - 1);
        var py = 5 - 2 * newNode.level;
        newNode.x = px;
        newNode.y = py;
        this.nElement++;
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
            console.log(node.value);
            this.runInOrder(node.right);
        }
    }


    clone() {
        const newTree = new Tree();
        const helper = (node) => {
            if (node !== null) {
                const newNode = new TreeNode(node.value, node.x, node.y);
                newNode.left = helper(node.left);
                newNode.right = helper(node.right);
                return newNode;
            }
        };
        newTree.root = helper(this.root);
        return newTree;
    }


    getJSXs() {
        const helper = (node, list) => {
            if (node !== null) {
                helper(node.left, list);
                list.push(<Node node={node}/>);
                helper(node.right, list);
            }
        };
        const res = [];
        helper(this.root, res);
        return res;
    }
}

