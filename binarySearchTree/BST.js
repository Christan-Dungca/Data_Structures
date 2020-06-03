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
  /*
  //? Alternate Solution
  BFS() {
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
  */

  BFS() {
    let node = this.root; 
    const data = [];
    const queue = [];

    queue.push(node);

    while(queue.length){
      node = queue.shift();
      data.push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    var data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    var data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.val)
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    var data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      data.push(node.val)
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

var tree = new BST();
