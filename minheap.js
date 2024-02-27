// implementing a priority q in JS
// heap data structure is used for its effeciency 
// parent node = (childnodeid - 1 ) // 2
// left child = 2i+1
// right child = 2i+2

class Minheap{
    constructor(){
        this.data = [];
        this.length = 0; //id
    }

    getparent(idx){
        let p = Math.floor((idx - 1) / 2);
        return p;
    }

    getleftchild(idx){
        let lc = 2 * idx + 1;
        return lc;
    }

    getrightchild(idx){
        rc = 2 * idx + 2;
        return rc;
    }

    heapifyup(idx){
        let currV = this.data[idx];
        let parent_idx = this.getparent(idx);
        let parentV = this.data[parent_idx];

        // root, nothing to heapify up
        if(idx === 0){
            return;
        }

        if(currV < parentV){
            // swap
            this.data[idx] = parentV;
            this.data[parent_idx] = currV;
            // perform heapify on parent id that is holding current V
            this.heapifyup(parent_idx)
        }
    }

    heapifydown(idx){
        let rightchild_idx = this.getrightchild(idx);
        let leftchild_idx = this.getleftchild(idx);
        let rightchild_v = this.data[rightchild_idx];
        let leftchild_v = this.data[leftchild_idx];
        let current_v = this.data[idx];

        if(idx >= this.length || leftchild_idx >= this.length){
            return;
        }

        if(leftchild_v < rightchild_v && leftchild_v < current_v){
            // swap current and right child
            this.data[leftchild_idx] = current_v;
            this.data[idx] = leftchild_v
            this.heapifydown(leftchild_idx);
        }
        
        if(rightchild_v < leftchild_v && rightchild_v < current_v){
            // swap current and right child
            this.data[rightchild_idx] = current_v;
            this.data[idx] = rightchild_v
            this.heapifydown(rightchild_idx);
        }
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
        if(this.length === 1){
            // make heap empty
            let out = this.data[0];
            this.data = [];
            this.length -= 1;
        }else{
            this.length -= 1; // remove last element
            this.data[0] = this.data[this.length]; // swap last element with root
            this.data.pop(this.length);
            this.heapifydown(0); // heapify down from root 
        }
    }

    peek(){
        // get min value in heap
        console.log(this.data[0]);
    }


}

mh = new Minheap();
mh.insert(4)
mh.insert(3);
mh.insert(1);
mh.insert(5);
mh.peek();

console.log(mh.data)