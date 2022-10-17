const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.base = null
  }

  root() {
    return this.base
  }

  // root() {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }

  add(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }


  min(data, node = this.base) {
    if (!node) {
      return
    }
    while (node.left && ((!data) || (data < node.left.data))) {
      node = node.left
    }
    return (!data) ? node.data : node
  }

  max(data, node = this.base) {
    if (!node) {
      return
    }

    while (node.rigth && ((!data) || (data < node.rigth.data))) {
      node = node.rigth
    }
    return (!data) ? node.data : node
  }
}

module.exports = {
  BinarySearchTree
};