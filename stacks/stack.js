class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

  push(val) {
    const newNode = new Node(val);
    if(this.size === 0) {
        this.first = newNode;
        this.last = newNode;
    } else {
        const temp = this.first;
        this.first = newNode;
        this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
      if(!this.first) return null;
      const temp = this.first;

      if(this.first === this.last) {
          this.last = null;
      }
      this.first = this.first.next
      this.size--;
      return temp.val;
  }

  // ? for testing
  print() {
    var arr = [];
    var current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }
}

