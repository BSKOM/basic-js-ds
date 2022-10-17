// const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.node = new ListNode()
    this.tail = this.node
  }

  getUnderlyingList() {
    return this.node
  }

  enqueue(value) {
    let curNode = new ListNode(value)
    if (this.node.value === undefined) {
      this.node = curNode
      this.tail = curNode
    } else {
      this.tail.next = curNode
      this.tail = this.tail.next
    }
  }

  dequeue() {
    let valNode = this.node.value
    this.node = this.node.next
    return valNode
  }
}

module.exports = {
  Queue
};
