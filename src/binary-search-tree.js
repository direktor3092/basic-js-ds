const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
 class BinarySearchTree {

  constructor() {
    this.start = null;
  }

  root() {
    return this.start;
  }

  add(data) {
    this.start = addNode(this.start, data);

    function addNode(node, data){
      if(node === null) {
        return new Node(data);
      }else if(node.data === data){
        return node;
      }else if(node.data > data){
        node.left = addNode(node.left, data);
      }else{
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return findInTree(this.start, data);
    function findInTree(node, data){
      if(node === null){
        return false;
      }else if(node.data === data){
        return true;
      }else if(node.data > data){
        return findInTree(node.left, data);
      }else{
        return findInTree(node.right, data);
      }
    }
  }

  find(data) {
    return searchInTree(this.start, data);
    function searchInTree(node, data){
      if (node === null) {
        return null;
      }else if(node.data === data){
        return node;
      }else if(node.data > data){
        return searchInTree(node.left, data);
      }else{
        return searchInTree(node.right, data);
      }
    }
  }

  remove(data) {
    this.start = removeNode(this.start, data);

    function removeNode(node, data){
      if (node === null){
        return null;
      }else if(node.data > data){
        node.left = removeNode(node.left, data);
        return node;
      }else if(node.data < data){
        node.right = removeNode(node.right, data);
        return node;
      }else if(node.left  === null && node.right === null){
          return null;
        }else if (node.left === null){
          node = node.right;
          return node;
        }else if(node.right === null){
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left){
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      
    }
  }

  min() {
    if(this.start === null) {
      return null;
    }

    let node = this.start;

    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(this.start === null){
      return null;
    }

    let node = this.start;
    while(node.right){
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
