class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    empty(){
        return this.size == 0
    }

    prepend(value){
        const node = new Node(value)
        if(this.empty()){
            this.head = node
        }else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    print(){
        if(this.empty()){
            console.log("list is empty");
        }else{
            let curr = this.head
            let data = ""
            while (curr) {
                data += `${curr.value} `
                curr = curr.next
            }
            console.log(data);
        }
    }

    insert(value,index){
        if(index<0 || index>this.size){
            return
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0; i< index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    search(value){
        if(this.empty()){
            return -1
        }
        let i =0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }
}


const list = new linkedList()
console.log(list.empty());
list.prepend(10)
list.prepend(20)
console.log(list.empty()); 
list.print()
list.insert(50,1)
list.insert(60,1)
list.insert(30,1)
list.insert(5,1)
list.print()
console.log(list.search(80));