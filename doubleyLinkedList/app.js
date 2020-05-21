class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(idx) {
    if (idx >= this.length || idx < 0) return null;

    let count;
    let current = null;

    if (idx <= this.length / 2) {
      current = this.head;
      count = 0;
      while (count != idx) {
        current = current.next;
        count++;
      }

    } else if (idx > this.length / 2) {
      current = this.tail;
      count = this.length - 1;
      while (count != idx) {
        current = current.prev;
        count--;
      }

    } 
    return current;
  }

  set(idx, val) {
    const nodeChanged = this.get(idx);
    if(nodeChanged != null) {
      nodeChanged.val = val;
      return true;
    } 
    return false;
  }

  insert(idx,  val){
    if(idx < 0 || idx > this.length) return false;
    if(idx === 0) return !!this.unshift(val);
    if(idx === this.length) return !!this.push(val);
    
    const newNode = new Node(val);
    const beforeNode = this.get(idx-1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++;
    return true;
  }

   remove(idx) {
    if(idx < 0 || idx >= this.length) return undefined;
    if(idx === 0) return !!this.shift();
    if(idx === this.length -1) return !!this.pop();

    const nodeRemoved = this.get(idx);
    const nodeBefore = nodeRemoved.prev;
    const nodeAfter = nodeRemoved.next;

    nodeRemoved.prev = null;
    nodeRemoved.next = null; 
    nodeBefore.next = nodeAfter;
    nodeAfter.prev = nodeBefore;

    this.length--;
    return nodeRemoved;
  }
}
