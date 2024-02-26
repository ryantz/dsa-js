// implementing a linkedlist in js
// head pointer, tail pointer(maybe)

class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

class Linkedlist{
    constructor(){
        this.head = null;
    }

    checkempty(){
        if(this.head === null){
            console.log("The linked list is empty");
            return;
        }
    }

    peek(){
        return this.head;
    }

    insert(val){
        let newnode = new Node(val);
        newnode.next = this.head;
        this.head = newnode;
    }

    clear(){
        this.head = null;
    }
    
    peeklast(){
        let currentnode = this.head;
        if(currentnode){
            while(currentnode.next){
                currentnode = currentnode.next;
            }
        }return currentnode;
    }
    
    printLL(){
        if(this.checkempty()){
            return;
        }
        while(this.head != null){
            console.log(this.head.data)
            this.head = this.head.next;
        }
    }
}

ll = new Linkedlist()
ll.insert(3);
ll.insert(29);
ll.insert(22);
ll.insert(4);
ll.peeklast();

