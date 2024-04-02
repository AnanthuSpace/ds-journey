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

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.data === value){
            this.head = this.head.next
            this.size--
        }else{
            let prev = this.head
            let removedOne
            while(prev.next && prev.next.data !== value){
                prev = prev.next
            }
            removedOne = prev.next
            prev.next = removedOne.next
            this.size--
            return value
        }
        return null
    }

}

const list = new linkedList()
console.log(list.isEmpty());
list.insert(10, 0)
list.prepend(20)
list.prepend(30)
list.removeValue(20)
list.print()