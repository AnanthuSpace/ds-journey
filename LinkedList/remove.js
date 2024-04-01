class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            node.next = node
            this.size++
        }
    }


    print() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let curr = this.head 
            let data = ""
            while (curr) {
                data += `${curr.data} `
                curr = curr.next
            }
            console.log(data);
        }
    }
    
    remove(index){
        if(index<0 || index>=this.size){
            return null
        }
        let removed
        if(index == 0){
            removed = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0; i<index-1;i++){
                prev = prev.next
            }
            removed = prev.next
            prev.next = removed.next
        }
        this.size--
        console.log("Removed item ",removed.value);
    }

}

const list = new linkedList()
console.log(list.isEmpty());
list.insert(10, 0)
list.prepend(20)
list.prepend(30)
list.remove(1)
list.print()