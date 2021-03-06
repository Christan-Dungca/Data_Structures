class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    var newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.head === null) return undefined;

    let current = this.head;
    let prevNode = current;

    while (current.next) {
      prevNode = current;
      current = current.next;
      // console.log('Current: ' + current.val, 'prevNode: ' + prevNode.val);
    }
    this.tail = prevNode;
    this.tail.next = null;
    this.length--;

    // checks if there is nothing else in there
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    var oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    let count = index;
    while (count > 0) {
      currentNode = currentNode.next;
      count--;
    }
    console.log(`Node with index of ${index}: ${currentNode.val}`);
    return currentNode;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val); //? Coeherses into a boolean value
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const leftNode = this.get(index - 1);
    const rightNode = leftNode.next;

    leftNode.next = newNode;
    newNode.next = rightNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;

    this.length--;
    return removedNode;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null
    let next = null;

    for(var idx = 0; idx < this.length; idx++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  // ? for testing
  print() {
    var arr = [];
    var current = this.head;

    while(current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }
}

const list = new SingleyLinkedList();

/* Testing */

list.push("hi");
list.push("you");
list.push("programmer");
list.push("!");

console.log(list);
