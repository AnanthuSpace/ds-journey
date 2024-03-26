class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class linkedList {
    constructor(){
        this.head = null
    }
    
    addLast(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }
}