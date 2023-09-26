import { Sorter } from './Sorter';

class Nodo {
  next: Nodo | null = null;
  constructor(public value: number) {}
}

export class LinkedList extends Sorter {
  head: Nodo | null = null;

  add(value: number): void {
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

  get length(): number {
    if (!this.head) return 0;

    let tail = this.head;
    let length = 1;

    while (tail.next) {
      length++;
      tail = tail.next;
    }

    return length;
  }

  at(index: number): Nodo {
    if (!this.head) throw new Error('Empty');

    let counter = 0;
    let node: Nodo | null = this.head;

    while (node) {
      if (index === counter) return node;
      node = node.next;
      counter++;
    }

    throw new Error('Index not found');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftValue = leftNode.value;
    leftNode.value = rightNode.value;
    rightNode.value = leftValue;
  }

  print(): void {
    if (!this.head) return;

    let node: Nodo | null = this.head;

    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}
