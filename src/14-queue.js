const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
    ListNode();
  }

  get size() {
    return this.tailIndex - this.headIndex;
  }

  enqueue(element) {
    this.items[this.tailIndex] = element;
    this.tailIndex++;
  }

  dequeue() {
    let delItem;
    if (this.items.length !== 0) {
      delItem = this.items[this.headIndex];
      delete this.items[this.headIndex];
      this.headIndex++;
    }
    return delItem;
  }
}

module.exports = Queue;
