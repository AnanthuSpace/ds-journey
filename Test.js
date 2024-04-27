// class Tree{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class Bst {
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insertion(value){
//         const newNode = new Tree(value)
//         if(this.root == null){
//             this.root = newNode
//         }else{
//             this.insertionNode(this.root, newNode)
//         }
//     }

//     insertionNode(root, newNode){
//         if(newNode.value<root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertionNode(root.left, newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertionNode(root.right, newNode)
//             }
//         }
//     }

//     minHight(node = this.root){
//         if(node == null){
//             return -1
//         }else{
//             let left = this.minHight(node.left)
//             let right = this.minHight(node.right)
//             if(left<right){
//                 return left+1
//             }else{
//                 return right+1
//             }
//         }
//     }

//     maxHight(node = this.root){
//         if(node == null){
//             return -1
//         }else{
//             let left = this.maxHight(node.left)
//             let right = this.maxHight(node.right)
//             if(left>right){
//                 return left+1
//             }else{
//                 return right+1
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     delete(value){
//         this.root = this.deleteNode(this.root, value)
//     }

//     deleteNode(root, value){
//         if(root == null){
//             return root
//         }
//         if(root.value> value){
//             root.left = this.deleteNode(root.left, value)
//         }else if(root.value<value){
//             root.right = this.deleteNode(root.right, value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }

//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right, root.value)
//         }
//         return root
//     }

//     inOrder(root){
//         if(root){
//             console.log(root.value);
//             this.inOrder(root.left)
//             this.inOrder(root.right)
//         }
//     }

//     levelOrder(){
//         let queue = []
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.value);
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }
// }

// const bst = new Bst()
// bst.insertion(9)
// bst.insertion(4)
// bst.insertion(17)
// bst.insertion(3)
// bst.insertion(6)
// bst.insertion(5)
// bst.insertion(7)
// bst.insertion(22)
// bst.insertion(20)
// console.log(bst.minHight());
// console.log(bst.maxHight());
// bst.delete(22)
// bst.inOrder(bst.root)
// bst.levelOrder()



// class MinHeap{
//     constructor(){
//         this.heap = []
//         this.size = 0
//     }

//     Parent(index){
//         return Math.floor((index-1)/2)
//     }

//     left(index){
//         return 2*index+1
//     }

//     right(index){
//         return 2*index+2
//     }

//     hasParent(index){
//         return this.Parent(index) >= 0
//     }

//     hasLeft(index){
//         return this.left(index)<this.size
//     }

//     hasRight(index){
//         return this.right(index)<this.size
//     }

//     swap(index1, index2){
//         let temp = this.heap[index1]
//         this.heap[index1] = this.heap[index2]
//         this.heap[index2] = temp
//     }


//     insert(data){
//         this.heap[this.size] = data
//         this.size++
//         // this.heapifyUpRecursive(this.size-1)   Recursive heapifyUp
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index = this.size-1
//         while(this.hasParent(index) && this.heap[this.Parent(index)]>this.heap[index]){
//             this.swap(this.Parent(index), index)
//             index = this.Parent(index)
//         }
//     }

//     // Recursive heapifyUp
//     heapifyUpRecursive(index){
//         if(this.hasParent(index) && this.heap[this.Parent(index)] > this.heap[index]){
//             this.swap(this.Parent(index), index)
//             this.heapifyUpRecursive(this.Parent(index))
//         }
//     }

//     display(){
//         console.log(this.heap);
//     }

//     delete(data){
//         const index = this.heap.indexOf(data)
//         if(index!==-1){
//             const lastIndex = this.size -1
//             this.swap(index,lastIndex)
//             this.heap.pop()
//             this.size--
//             this.heapifyDown(0)
//         }
//     }

//     heapifyDown(index){
//         while(this.hasLeft(index)){
//             let small = this.left(index)
//             if(this.hasRight(index) && this.heap[this.right(index)]<this.heap[this.left(index)]){
//                 small = this.right(index)
//             }
//             if(this.heap[index] < this.heap[small]){
//                 break;
//             }
//             this.swap(index, small)
//             index = small
//         }
//     }
// }


// const heap = new MinHeap()
// heap.insert(5)
// heap.insert(20)
// heap.insert(10)
// heap.insert(8)
// heap.delete(5)
// heap.display()


// Graph

class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(v){
        if(!this.adjacencyList[v]){
            this.adjacencyList[v] = new Set()
        }
    }

    addEdge(v1,v2){
        if(!this.adjacencyList[v1]){
            this.addVertex(v2)
        }
        if(!this.adjacencyList[v2]){
            this.addVertex(v2)
        }
        this.adjacencyList[v1].add(v2)
        this.adjacencyList[v2].add(v1)
    }

    display(){
        for(let v in this.adjacencyList){
            console.log(v + "->" + [...this.adjacencyList[v]]);
        }
    }

    removeEdge(v1,v2){
        this.adjacencyList[v1].delete(v2)
        this.adjacencyList[v2].delete(v1)
    }

    removeV(v){
        if(!this.adjacencyList[v]){
            return 
        }
        for(let vertex of this.adjacencyList[v]){
            this.removeEdge(vertex, v)
        }
        delete this.adjacencyList[v]
    }

    cyclic(){
        for(let v in this.adjacencyList){
            if (this.adjacencyList[v].has(v)) {
                return true
            }
        }
        return false
    }
}


const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("A","D")
graph.removeEdge("A","B")
// graph.addEdge("A","A")
console.log(graph.cyclic());
graph.removeV("B")
graph.display()