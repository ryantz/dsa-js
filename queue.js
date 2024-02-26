// implementing a queue in js
// FIFO structure
// first element inserted = first element out
// enqueue and dequeue 

class Queue{
    constructor(){
        this.data = [];
        //index starts at -1 as theres nothing in the queue
        //can help to check if queue is empty
        this.head = -1;
        this.tail = -1;
    }
    
    enqueue(val){
        if(this.head === -1){
            this.head = 0;
        }this.tail++;
        this.data[this.tail] = val;

    }

    dequeue(){
        if(this.head === -1){
            console.log("the queue is empty");
            return;
        }
        this.data[this.head] = null;
        this.head++;
        
    }

    size(){
        return this.tail + 1; //tail index starts from 0
    }

    peek(){
        return this.data[this.head];
    }

    printq(){
        if(this.head === -1){
            console.log("the queue is empty");
            return;
        }
        for(let i=0; i<=this.tail; i++){

            console.log(this.data[i]);
        }
    }
   
}

let q = new Queue();
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.dequeue();
q.printq();
console.log(q.peek())
