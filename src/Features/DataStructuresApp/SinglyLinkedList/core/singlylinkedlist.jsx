import { Node } from "./node";

export class LinkedList {
    constructor () {
        this._head = null;
        this._tail = null;
        this._nElement = 0;
        this._GAP = 100;
        this._x = 20;
        this._y = 0;
        this._startX = 300;
        this._startY = 0;
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
}

