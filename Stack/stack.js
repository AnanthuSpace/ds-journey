class Stack{
    constructor(){
        this.stack = []
    }

    isEmpty(){
        return this.size === 0
    }
    push(value){
        this.stack.push(value)
    }

    pop(){
        if(this.isEmpty()){
           return "Stack is empty"
        }
        this.stack.pop()
    }

    size(){
        return this.stack.length
    }

    peek(){
        return this.stack[this.size()-1]
    }

    print(){
        return this.stack.toString()
    }
}


const stack = new Stack()
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)
stack.push(70)
stack.pop()
console.log(stack.print());