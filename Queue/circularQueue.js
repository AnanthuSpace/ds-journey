class circularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currLength = 0
        this.front = -1
        this.rear = -1
    }

    isFull() {
        return this.currLength === this.capacity
    }

    isEmpty() {
        return this.currLength === 0
    }

    enqueue(element) {
        if(!this.isFull()){
            this.rear++
            this.items[this.rear] = element
            this.currLength++
            if(this.front == -1){
                this.front = this.rear
            }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front+1)%this.capacity
        if(this,this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        console.log(item);
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue is empty");
        }else{
            let str = ""
            for(let i=this.front; i!==this.rear;i=(i+1)%this.capacity){
                str += this.items[i]+ " "
            }
            console.log(str);
        }
    }
}


const cQueue = new circularQueue(5)
cQueue.enqueue(10)
cQueue.enqueue(20)
cQueue.enqueue(30)
cQueue.enqueue(40)
cQueue.print()
console.log(cQueue.isFull());