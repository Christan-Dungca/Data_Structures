class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (this.root === null) return null;

    const newNode = new Node(val);
    let current = this.root;
    let foundNode = false;

    if (this.root.val === newNode.val) return true;

    while (foundNode === false) {
      if (val === current.val) {
        foundNode = true;
      }
      if (val > current.val) {
        if (current.right === null) return false;

        if (current.right) {
          current = current.right;
        }
      } else if (val < current.val) {
        if (current.left === null) return false;

        if (current.left) {
          current = current.left;
        }
      }
    }

    return foundNode;
  }
}

var tree = new BST();
// tree.insert(10);
// tree.insert(15);
// tree.insert(5);
// tree.insert(20);
// tree.insert(0);
// tree.insert(25);
