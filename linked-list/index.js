class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFristData = (data) => {
    this.head = new Node(data, this.head);
    this.size++;
  };

  insertLastData = (data) => {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  };

  insertAt = (data, index) => {
    // Out range
    if (index > 0 && index > this.size) {
      return;
    }

    // first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      this.size++;
      return;
    }

    const node = new Node(data);
    let current, previous;
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
    this.size++;
  };

  getAt = (index) => {
    let current = this.head;
    let count = 0;

    if (index > 0 && index > this.size) {
      return;
    }

    while (current) {
      if (count === index) {
        console.log(current.data);
      }

      count++;
      current = current.next;
    }
  };

  removeAt = (index) => {
    let current = this.head;
    let previous;
    let count = 0;

    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  };

  clearList = () => {
    this.head = null;
    this.size = 0;
  };

  printListData = () => {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  };
}

const list = new LinkedList();

list.insertFristData(100);
list.insertFristData(200);
list.insertFristData(50);
list.insertLastData(300);

// list.insertAt(190, 2);
// list.removeAt(2);
list.clearList();
list.printListData();
console.log("-------");
// list.getAt(2);
