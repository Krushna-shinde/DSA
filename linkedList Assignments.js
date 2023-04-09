// Reverse a Linked List
// Medium
// Given an array arr of size n . Write code to convert into Linkedlist and then reverse the linked list. We need to reverse the list by changing the links between nodes.

// Example 1:
// Input:
// 4

// [85 15 4 20 ]

// Output:
// 20.4.15.85 .

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function reverseLinkedList(head) {
    if (!head || !head.next) {
      return head;
    }
  
    let prev = null;
    let curr = head;
    let next = head.next;
  
    while (curr) {
      curr.next = prev;
      prev = curr;
      curr = next;
      if (next) {
        next = next.next;
      }
    }
  
    return prev;
  }
  
  function createLinkedList(arr) {
    if (!arr || arr.length === 0) {
      return null;
    }
  
    let head = new ListNode(arr[0]);
    let curr = head;
  
    for (let i = 1; i < arr.length; i++) {
      let node = new ListNode(arr[i]);
      curr.next = node;
      curr = node;
    }
  
    return head;
  }
  
  let arr = [85, 15, 4, 20];
  let head = createLinkedList(arr);
  let reversed = reverseLinkedList(head);
  
  let result = '';
  
  while (reversed) {
    result += reversed.val + ' ';
    reversed = reversed.next;
  }
  
  console.log(result.slice(0, -1)); // Output: 20.4.15.85
  
//   Linked List Palindrome
//   Hard
//   Given an array arr of size n . Write code to convert into Linkedlist and return true if it is a palindrome or false otherwise.
  
//   Example 1:
//   Input:
//   head = [1,2,2,1]
  
//   Output:
//   true

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function isPalindrome(head) {
    if (!head || !head.next) {
      return true;
    }
  
    // Find the middle node
    let slow = head;
    let fast = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Reverse the second half of the list
    let prev = null;
    let curr = slow;
  
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
  
    // Compare the first and second halves of the list
    let firstHalf = head;
    let secondHalf = prev;
  
    while (secondHalf) {
      if (firstHalf.val !== secondHalf.val) {
        return false;
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
  
    return true;
  }
  
  function createLinkedList(arr) {
    if (!arr || arr.length === 0) {
      return null;
    }
  
    let head = new ListNode(arr[0]);
    let curr = head;
  
    for (let i = 1; i < arr.length; i++) {
      let node = new ListNode(arr[i]);
      curr.next = node;
      curr = node;
    }
  
    return head;
  }
  
  let arr = [1, 2, 2, 1];
  let head = createLinkedList(arr);
  let isPal = isPalindrome(head);
  
  console.log(isPal); // Output: true
  
//   Loop in Linked List
//   Medium
//   Given an array arr of size n . Write code to convert into Linkedlist and check if the linked list has a loop or not.
  
//   Example 1:
//   Input:
//   4
  
//   10 15 4 20
  
//   Output:
//   false


class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function hasLoop(head) {
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

function createLinkedList(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  let head = new ListNode(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    let node = new ListNode(arr[i]);
    curr.next = node;
    curr = node;
  }

  return head;
}

let arr = [10, 15, 4, 20];
let head = createLinkedList(arr);
let hasLooped = hasLoop(head);

console.log(hasLooped); // Output: false
