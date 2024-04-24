class PriorityQueue{
    constructor(){
        this.heap = []
    }

    isEmpty() {
        return this.heap.length === 0;
    }


    enqueue(data, priority){
        const element = {data, priority}
        this.heap.push(element)
        this.heapifyUp(this.heap.length-1)
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const minElement = this.heap[0];
        const lastElement = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = lastElement;
            this.heapifyDown(0);
        }
        return minElement.data;
    }

    heapifyUp(index){
        let parentIndex = Math.floor((index-1)/2)
        while(index > 0 && this.heap[index].priority < this.heap[parentIndex].priority){
            [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
            parentIndex = Math.floor((index-1)/2)
        }
    }

    heapifyDown(index) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let smallestIndex = index;
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority < this.heap[smallestIndex].priority) {
            smallestIndex = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[smallestIndex].priority) {
            smallestIndex = rightChildIndex;
        }
        if (smallestIndex !== index) {
            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            this.heapifyDown(smallestIndex);
        }
    }
}


const pq = new PriorityQueue();
pq.enqueue('Task 1', 3);
pq.enqueue('Task 2', 1);
pq.enqueue('Task 3', 2);

console.log(pq.dequeue()); 