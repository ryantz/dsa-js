// implementing a circular queue in js
// after dequeue , enqueue checks if front indexes are empty

class CircularQ{
    constructor(size){
        this.size = size;
        this.head = this.tail = -1;
        this.data = [size];
    }

    enqueue(val){
        // check if queue is full
        if((this.tail + 1) % this.size === this.head){
            console.log("the queue is full");
        }else if(this.head === -1){
            this.head = 0;
            this.tail++;
            this.data[this.tail] = val;
        }else{
            this.tail = ((this.tail + 1) % this.size);
            this.data[this.tail] = val;
        }
    }

    dequeue(){
        if(this.tail === -1){
            console.log("the queue is empty");
        }
        this.data[this.head] = undefined;
        this.head++;
    }

    prints(){
        for(let i=0; i<=this.data.length-1; i++){
            console.log(this.data[i]);
        }
    }
}

cq = new CircularQ(5);
cq.enqueue(1);
cq.enqueue(3);
cq.enqueue(5);
cq.enqueue("a");
cq.enqueue("c");
//cq.enqueue(4);
cq.dequeue();
cq.dequeue();
cq.enqueue("new");
cq.enqueue("new2");


cq.prints()

