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

    delete(data){
        const index = this.heap.indexOf(data)
        if(index!==-1){
            const lastIndex = this.size -1
            this.swap(index,lastIndex)
            this.heap.pop()
            this.size--
            this.heapifyDown(0)
        }
    }

    heapifyDown(index){
        while(this.hasLeft(index)){
            let small = this.left(index)
            if(this.hasRight(index) && this.heap[this.right(index)]<this.heap[this.left(index)]){
                small = this.right(index)
            }
            if(this.heap[index] < this.heap[small]){
                break;
            }
            this.swap(index, small)
            index = small
        }
    }
}


const heap = new MinHeap()
heap.insert(5)
heap.insert(20)
heap.insert(10)
heap.insert(8)
heap.delete(5)
heap.display()