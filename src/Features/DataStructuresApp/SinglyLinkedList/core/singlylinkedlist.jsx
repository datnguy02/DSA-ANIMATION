import { Node } from "./node";

export class LinkedList {
    constructor () {
        this._head = null;
        this._tail = null;
        this._nElement = 0;
        this._GAP = 100;
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
        const newNode = new Node(value);
        if (this.isEmpty())
            this.tail = newNode;
        else 
            newNode.next = this.head;
        this.head = newNode;
        this.nElement++;
    }

    insertLast(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        }
        else {
            this.tail.next = newNode;
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
            const newNode = new Node(value);
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
            this.nElement++;
        }
    }
}

