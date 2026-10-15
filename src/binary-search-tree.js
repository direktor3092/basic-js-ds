const { NotImplementedError } = require('../lib');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const newNode = { data, left: null, right: null };

    if (this.treeRoot === null) {
      this.treeRoot = newNode;
      return;
    }

    let current = this.treeRoot;

    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (data > current.data) {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }

  find(data) {
    let current = this.treeRoot;
    while (current !== null) {
      if (data === current.data) return current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    this.treeRoot = this.removeNode(this.treeRoot, data);
  }

  removeNode(node, data) {
    if (node === null) return null;

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }

    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    if (node.left === null && node.right === null) return null;
    if (node.left === null) return node.right;
    if (node.right === null) return node.left;

    let successor = node.right;
    while (successor.left !== null) {
      successor = successor.left;
    }

    node.data = successor.data;
    node.right = this.removeNode(node.right, successor.data);
    return node;
  }

  min() {
    if (this.treeRoot === null) return null;
    let current = this.treeRoot;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (this.treeRoot === null) return null;
    let current = this.treeRoot;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};
