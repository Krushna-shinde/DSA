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
    //add value in DoublyLinked list
    addValue(value){ 
        let newNode = new Node(value);
        let latest;
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else {
            latest = this.head 
            while(latest.next){
                latest = latest.next;
            }
            latest.next = newNode;
            newNode.tail = latest.next;
       }
       this.size++;
    }
    isEmpty(){
        if(this.size==0){
            return true;
        } 
        else {
        return false;
        }
    }
    printOut(){
        let abc=this.head;
        while(abc){
            console.log(abc.item);
            abc = abc.next;
     }
    }
    //  //to find index of particular value
    printIndex(value){  
        let xyz = this.head;
        let indexCount=0;
        if(xyz == null)   //no nodes
        {
              return -1;
        }
        else{
        while(xyz != null){   //nodes are present
                if(value == xyz.item)
                {
                    return indexCount;
                }
            xyz = xyz.next;
            indexCount++;
            }
            return -1;
            }  
        }  
        // delete the value which i given by the user
        deleteNode(value){
            let mno = this.head;
            let prev=null;
            if(mno == null)
            {
                return -1; //since doubly linked list is already empty
            }
            else{
                while(mno != null){
                    if(value == mno.item)
                    {
                     if(mno == this.head)   // weather the given value is the head or not 
                    {
                     this.head = mno.next;  // 2nd node wll become the head 
                    let a = mno.next;
                    a = null;  // 2nd node's prev pointer as null
                    } else if(mno == this.tail)
                    {
                        this.tail = mno.prev ;
                        mno.prev.next = null;
                    }
                     else{
                        prev.next = mno.next; // current node is deleted
                        let c = mno.next;
                        c.prev = mno.prev;
                    }
                }
                 prev = mno;  // assigning a node to it.
                    mno = mno.next;
                }
                return -1; //since linked list does not have the given value hence nothing to delete
            }
        
        }

} 
let myList = new DoublyLinkedList();
myList.addValue(5);
myList.addValue(10);
myList.addValue(15);
console.log(myList.isEmpty());
myList.printOut();
console.log(myList.printIndex(15));
console.log('====================');
myList.deleteNode(15);
myList.printOut();
// console.log(myList.isEmpty());
// myList.addValue(5);
// myList.addValue(10);
// myList.addValue(15);
// console.log(myList.size);
// 
// 
// 

