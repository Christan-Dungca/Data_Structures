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

  search() {
    const queue = [];
    const nodesVisted = [];

    queue.push(this.root);

    while (queue.length) {
      let visited = queue.shift();
      nodesVisted.push(visited);

      if (visited.right && visited.left) {
        queue.push(visited.left);
        queue.push(visited.right);
      } else if (visited.left) {
        queue.push(visited.left);
      } else if (visited.right) {
        queue.push(visited.right);
      }
    }

    return nodesVisted;
  }
}

var tree = new BST();
