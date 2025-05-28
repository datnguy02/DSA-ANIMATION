import { Node } from "./node";

export class SinglyLinkedList {
    constructor () {
        this._head = null;
        this._tail = null;
        this._nElement = 0;
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
}

const list = new SinglyLinkedList();
list.insertFirst(3);
list.insertFirst(4);
list.insertFirst(7);

console.log(list);