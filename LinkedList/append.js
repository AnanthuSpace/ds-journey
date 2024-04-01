class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    append(value){
        const node = new Node(value)
        let prev = this.head
        if(this.isEmpty()){
            this.head = node
        }else{
        while(prev.next){
            prev = prev.next
        }
        prev.next = node 
    }
        this.size++
    }

    print(){
        let curr = this.head
        let listValue =""
        while(curr){
            listValue += `${curr.value} `
            curr = curr.next
        }
        console.log(listValue);
    }
}

const list = new linkedList()
console.log(list.isEmpty());
list.append(10)
list.append(20)
console.log(list.isEmpty());
list.print()
