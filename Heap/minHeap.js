class MinHeap{
    constructor(){
        this.heap = []
        this.size = 0
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }

    getLeftChildIndex(index){
        return 2*index+1
    }

    getRightChildIndex(index){
        return 2*index+2
    }

    hasParent(index){
        return this.getParentIndex(index) >= 0
    }

    hasLeftChild(index){
        return this.getLeftChildIndex(index)<this.size
    }

    hasRightChild(index){
        return this.getRightChildIndex(index)<this.size
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
        let index = this.size
        while(this.hasParent(index) && this.heap[this.getParentIndex(index)]>this.heap[index]){
            this.swap(this.getParentIndex(index), index)
            index = this.getParentIndex(index)
        }
    }

    // Recursive heapifyUp
    heapifyUpRecursive(index){
        if(this.hasParent(index) && this.heap[this.getParentIndex(index)] > this.heap[index]){
            this.swap(this.getParentIndex(index), index)
            this.heapifyUpRecursive(this.getParentIndex(index))
        }
    }

    display(){
        console.log(this.heap);
    }
}


const heap = new MinHeap()
heap.insert(5)
heap.insert(20)
heap.insert(10)
heap.insert(8)
heap.display()