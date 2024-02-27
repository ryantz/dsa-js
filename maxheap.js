// implementing a maxheap
//largest node on top

class Maxheap{
    constructor(){
        this.data = [];
        this.length = 0;
    }

    get_parent(idx){
        let p = Math.floor((idx - 1) / 2);
        return p;
    }

    get_left_child(idx){
        let lc = 2 * idx + 2;
        return lc;
    }

    get_right_child(idx){
        let rc = 2 * idx + 1;
        return rc;
    }

    insert(val){
        this.data.push(val);
        this.heapifyup(this.length);
        this.length += 1;
    }

    delete(){
        // empty heap
        if(this.length === 0){
            return -1;
        }
        // heap of 1 element
        if(this.length === 1){
            out = this.data[0];
            this.data = [];
            this.length -= 1;
        }
        // normal 
        else{
            this.length -= 1;
            this.data[0] = this.data[this.length];
            this.data.pop(this.length);
            this.heapifydown(0);
        }
    }   

    heapifyup(idx){
        let current_v = this.data[idx];
        let parent_idx = this.get_parent(idx);
        let parent_v = this.data[parent_idx];

        if(idx === 0){
            return;
        }
        if(current_v > parent_v){
            this.data[idx] = parent_v;
            this.data[parent_idx] = current_v;
            this.heapifyup(parent_idx);
        }
    }

    heapifydown(idx){
        let right_child_idx = this.get_right_child(idx);
        let left_child_idx = this.get_left_child(idx);
        let right_child_v = this.data[right_child_idx];
        let left_child_v = this.data[left_child_idx];
        let current_v = this.data[idx];

        if(idx >= this.length || left_child_idx >= this.length){
            return;
        }
        if(left_child_v > right_child_idx && left_child_v > current_v){
            this.data[idx] = left_child_v;
            this.data[left_child_idx] = current_v;
            this.heapifydown(left_child_idx);
        }
        if(right_child_v > left_child_v && right_child_v > current_v){
            this.data[idx] = right_child_v;
            this.data[right_child_idx] = current_v;
            this.heapifydown(right_child_idx);
        }
    }

    peek(){
        //get max value in heap
        console.log(this.data[0]);
    }
}

maxh = new Maxheap();
maxh.insert(1);
maxh.insert(2);
maxh.insert(3);
maxh.insert(4);
maxh.insert(5);
maxh.delete();
maxh.peek();
console.log(maxh.data)