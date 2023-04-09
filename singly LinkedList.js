class Node {
    constructor(value) {
      this.item = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    //add value in linked list
    addValue(value){ 
        let newNode = new Node(value);
        let latest;
        if(this.head == null){
            this.head = newNode;
        }else {
            latest = this.head 
            while(latest.next){
                latest = latest.next;
            }
            latest.next = newNode;
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
     //to find index of particular value
    printIndex(value){  
        let xyz = this.head;
        let indexCount=0;
        if(xyz == null)
        {
              return -1;
        }
        else{
        while(xyz != null){
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
                return -1; //since linked list is already empty
            }
            else{
                while(mno != null){
                    if(value == mno.item)
                    {
                     if(mno == this.head)   // weather the given value is the head or not 
                    {
                     this.head = mno.next;  // 2nd node wll become the head 
                     }
                     else{
                        prev.next = mno.next; // current node is deleted
                    }
                }
                 prev = mno;  // assigning a node to it.
                    mno = mno.next;
                }
                return -1; //since linked list does not have the given value hence nothing to delete
            }
        
        }

} 
let myList = new LinkedList();
console.log(myList.isEmpty());
myList.addValue(5);
myList.addValue(10);
myList.addValue(15);
console.log(myList.size);
console.log(myList.isEmpty());
myList.printOut();
console.log(myList.printIndex(15));
console.log('====================');
myList.deleteNode(10);
myList.printOut();
