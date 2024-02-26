// implementing a stack in js
// LIFO structure 
// last element insert = first element out

class Stack{
    constructor(){
        this.data = [];
        this.top = 0; // pointer for the top of the stack
    }

    check_empty(){
        return this.top === 0;
        //if id of top pointer is 0, stack is empty
    }

    push(val){
        this.data[this.top] = val;
        this.top++;
    }

    pop(){
        this.data[this.top] == null;
        this.top--;
    }

    peek(){
        return this.data[this.top-1] //-1 as after push. top pointer is pointing to the next position which is empty.
    }

    printval(){
        if(this.check_empty()){
            console.log("Stack is empty")
            return;
        }
        for(let i=0; i<=this.top-1; i++){
            console.log(this.data[i]);
        }
    }

}

newstack = new Stack();

newstack.push(1);
newstack.push(2);
newstack.pop();
newstack.pop();
//newstack.printval();
//console.log(newstack.check_empty());
newstack.push(2);
newstack.push(3);
console.log(newstack.peek())