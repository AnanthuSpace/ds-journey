class queue{
    constructor(){
        this.items = []
        this.head = 0
        this.tail = 0
    }

    enqueue(value){
        if(this.isEmpty()){
            this.items[this.head] = value
        }else{
            this.items[this.tail] = value
            this.tail++
        }
    }

    dequeue(){
        const item = this.items[this.head]
        delete this.items[this.head]
        this.head
        console.log(item);
    }

    isEmpty(){
        return this.length === 0
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.items[this.head]
    }

    size(){
        return this.items.length
    }

    print(){
        return this.items.toString()
    }
}


const res = new queue()
res.enqueue(10)
res.enqueue(20)
res.enqueue(30)
console.log(res.print());
console.log(res.size());
res.dequeue()
res.dequeue()
console.log(res.print());
console.log(res.size());