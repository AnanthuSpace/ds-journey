class Node {
    constructor(){
        this.data = 0
        this.link = null
    }
}

class Stack{
    constructor(){
        this.top = null
    }

    push(x){
        let node = new Node(x)
        node.data = x
        node.link = this.top
        this.top = node
    }

    empty(){
        return this.top === null
    }

    peek(){
        if(!this.empty()){
            return this.top.data
        }else{
            return null
        }
    }

    pop(){
        if(this.empty()){
            return null
        }else{
            this.top = this.top.link
        }
    }

    display(){
        if(this.empty()){
            return null
        }else{
            let temp= this.data
            while(temp!==null){
                console.log(temp+"->");
                temp = this.link
            }
        }
    }
}

const res = new Stack()
res.push(20)
res.push(30)
res.push(40)
console.log(res.peek());
console.log(res.empty());
res.display()