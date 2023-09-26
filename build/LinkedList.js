"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Nodo {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(value) {
        const node = new Nodo(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        if (!this.head)
            return 0;
        let tail = this.head;
        let length = 1;
        while (tail.next) {
            length++;
            tail = tail.next;
        }
        return length;
    }
    at(index) {
        if (!this.head)
            throw new Error('Empty');
        let counter = 0;
        let node = this.head;
        while (node) {
            if (index === counter)
                return node;
            node = node.next;
            counter++;
        }
        throw new Error('Index not found');
    }
    compare(leftIndex, rightIndex) {
        return this.at(leftIndex).value > this.at(rightIndex).value;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftValue = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = leftValue;
    }
    print() {
        if (!this.head)
            return;
        let node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
