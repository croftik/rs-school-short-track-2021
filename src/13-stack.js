class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    let delItem;
    if (this.items.length !== 0) {
      delItem = this.items[this.items.length - 1];
      this.items.pop();
    }
    return delItem;
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

module.exports = Stack;
