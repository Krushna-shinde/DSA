class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}


class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    
clear() {
    this.head = null;
}




getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
}


getFirst() {
    return this.head;
}



}




let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2


let list = new LinkedList(node1)


console.log(list.head.next.data) //returns 5

console.log(list.size())


console.log(list.getFirst())

console.log(list.getLast())




LinkedList.prototype.insertAtBeginning = function(data){
    // A newNode object is created with property data and next = null
        let newNode = new ListNode(data);
    // The pointer next is assigned head pointer so that both pointers now point at the same node.
        newNode.next = this.head;
    // As we are inserting at the beginning the head pointer needs to now point at the newNode. 
        
        this.head = newNode;
        return this.head;
    }

list.insertAtBeginning(4)

console.log(list)


LinkedList.prototype.insertAtEnd = function(data){
    // A newNode object is created with property data and next=null
        
        let newNode = new ListNode(data);
    // When head = null i.e. the list is empty, then head itself will point to the newNode.
        if(!this.head){
            this.head = newNode;
            return this.head;
        }
    // Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
       let tail = this.head;
       while(tail.next !== null){
            tail = tail.next;
       }
       tail.next = newNode;
       return this.head;
    }

    list.insertAtEnd(9)

    console.log(list.getLast())
    


    
// A helper function getAt() is defined to get to the desired position. This function can also be later used for performing delete operation from a given position.
LinkedList.prototype.getAt = function(index){
    let counter = 0;
    let node = this.head;
    while (node) {
        if (counter === index) {
           return node;
        }
        counter++;
        node = node.next;
    }
    return null;
}

console.log(list.getAt(2))



LinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        return;
    }
    this.head = this.head.next;
    return this.head;
}

list.deleteFirstNode()



LinkedList.prototype.deleteAt = function(index){
    // when list is empty i.e. head = null
        if (!this.head) {
             this.head = new Node(data);
             return;
         }
    // node needs to be deleted from the front of the list i.e. before the head.
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
    // else, use getAt() to find the previous node.
        const previous = this.getAt(index - 1);
        
        if (!previous || !previous.next) {
            return;
        }
        
        previous.next = previous.next.next;     
        return this.head
    }
    

console.log(list)

list.deleteAt(2)
console.log(list)



console.log(list.searchElement(5));