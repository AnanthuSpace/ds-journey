class MaxHeap {
    constructor() {
        this.heap = []
        this.size = 0
    }

    parent(i) {
        return Math.floor((i - 1) / 2)
    }

    left(i) {
        return 2 * i + 1
    }

    right(i) {
        return 2 * i + 2
    }

    hasParent(i) {
        return this.parent(i) >= 0
    }

    hasLeft(i) {
        return this.left(i) < this.size
    }

    hasRight(i) {
        return this.right(i) < this.size
    }

    swap(i1, i2) {
        let temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }

    insert(data) {
        this.heap.push(data)
        this.size++
        this.heapifyUp(this.size - 1)
    }

    heapifyUp(index) {
        while (this.hasParent(index) && this.heap[this.parent(index)] < this.heap[index]) {
            this.swap(this.parent(index), index)
            index = this.parent(index)
        }
    }

    display() {
        console.log(this.heap);
    }

    delete() {
        this.heap.shift()
        this.size--
        this.heapifyDown(0)
    }

    heapifyDown(index) {
        while (this.hasLeft(index)) {
            let large = this.left(index)
            if (this.hasRight(index) && this.heap[this.right(index)] > this.heap[this.left(index)]) {
                large = this.right(index)
            }
            if (this.heap[index] > this.heap[large]) {
                break;
            }
            this.swap(index, large)
            index = large
        }
    }

    heapify(index, size) {
        let large = index
        const left = this.left(index)
        const right = this.right(index)
        if (left < size && this.heap[left] > this.heap[large]) large = left
        if (right < size && this.heap[right] > this.heap[large]) large = right
        if (large !== index) {
            this.swap(large, index)
            this.heapify(large, size)
        }
    }

    sort() {
        let size = this.size
        for (let i = size - 1; i > 0; i--) {
            this.swap(0, i)
            this.heapify(0, i)
        }
    }
}

const maxHeap = new MaxHeap()
maxHeap.insert(5)
maxHeap.insert(20)
maxHeap.insert(10)
maxHeap.insert(8)
maxHeap.insert(7)
maxHeap.delete()
maxHeap.display()
maxHeap.sort()
maxHeap.display()