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


    // Add a node to the first

    addFirst(data){
        const  newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }

    //  Add a node to the last
}