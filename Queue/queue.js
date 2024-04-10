class queue{
    constructor(){
        this.items = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(value){
        this.items[this.head]
    }

    dequeue(){
        this.items.shift()
    }

    isEmpty(){
        return this.length === 0
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.items[0]
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
console.log(res.print());
console.log(res.size());