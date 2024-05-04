class MinHeap{
    constructor(){
        this.heap = []
        this.size = 0
    }

    Parent(index){
        return Math.floor((index-1)/2)
    }

    left(index){
        return 2*index+1
    }

    right(index){
        return 2*index+2
    }

    hasParent(index){
        return this.Parent(index) >= 0
    }

    hasLeft(index){
        return this.left(index)<this.size
    }

    hasRight(index){
        return this.right(index)<this.size
    }

    swap(index1, index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }


    insert(data){
        this.heap[this.size] = data
        this.size++
        // this.heapifyUpRecursive(this.size-1)   Recursive heapifyUp
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.size-1
        while(this.hasParent(index) && this.heap[this.Parent(index)]>this.heap[index]){
            this.swap(this.Parent(index), index)
            index = this.Parent(index)
        }
    }

    // Recursive heapifyUp
    heapifyUpRecursive(index){
        if(this.hasParent(index) && this.heap[this.Parent(index)] > this.heap[index]){
            this.swap(this.Parent(index), index)
            this.heapifyUpRecursive(this.Parent(index))
        }
    }

    display(){
        console.log(this.heap);
    }

    delete(){
        this.heap[0] = this.heap[this.size-1]
        this.heap.pop()
        this.size--
        this.heapifyDown(0)
    }

    heapifyDown(index) {
        let small = index
        const left = this.left(index)
        const right = this.right(index)
        if(left < this.size && this.heap[this.left(index)] < this.heap[small]){
            small = left
        }
        if(right < this.size && this.heap[this.right(index)] < this.heap[small]){
            small = right
        }

        if(small !== index){
            this.swap(index, small)
            this.heapifyDown(small)
        }
    }
}


const heap = new MinHeap()
heap.insert(5)
heap.insert(20)
heap.insert(10)
heap.insert(8)
heap.insert(7)
heap.delete(5)
heap.display()