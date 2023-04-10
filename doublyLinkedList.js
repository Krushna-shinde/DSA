class Node {
    constructor(value) {
      this.item = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // add value to the end of the list
    addValue(value) {
      let newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.size++;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    printOut() {
      let current = this.head;
      while (current !== null) {
        console.log(current.item);
        current = current.next;
      }
    }
  
    // find the index of a value in the list
    printIndex(value) {
      let current = this.head;
      let index = 0;
      while (current !== null) {
        if (current.item === value) {
          return index;
        }
        current = current.next;
        index++;
      }
      return -1; // value not found
    }
  
    // delete a node with the given value
    deleteNode(value) {
      let current = this.head;
      let prev = null;
  
      // iterate over the list to find the node to delete
      while (current !== null) {
        if (current.item === value) {
          if (current === this.head) {
            this.head = current.next;
            if (this.head !== null) {
              this.head.prev = null;
            } else { // list is empty
              this.tail = null;
            }
          } else if (current === this.tail) {
            this.tail = current.prev;
            this.tail.next = null;
          } else {
            prev.next = current.next;
            current.next.prev = prev;
          }
          this.size--;
          return current.item;
        }
        prev = current;
        current = current.next;
      }
      return -1; // value not found
    }
  }
  
  // test the implementation
  let myList = new DoublyLinkedList();
  myList.addValue(5);
  myList.addValue(10);
  myList.addValue(15);
  console.log(myList.isEmpty()); // false
  myList.printOut(); // 5 10 15
  console.log(myList.printIndex(15)); // 2
  console.log('====================');
  myList.deleteNode(15);
  myList.printOut(); // 5 10
  