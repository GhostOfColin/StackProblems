// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }

}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if(!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      let oldNode = this.top;
      this.top = null;
      this.bottom = null;
      this.length--;
      return oldNode.value;
    } else {
      let oldNode = this.top;
      this.top = this.top.next;
      this.length--;
      return oldNode.value;
    }
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
