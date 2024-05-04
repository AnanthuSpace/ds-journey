// class Tree{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class Bst{
//     constructor(){
//         this.root = null
//     }

//     insert(value){
//         const newNode = new Tree(value)
//         if(this.root == null){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root, newNode)
//         }
//     }

//     insertNode(root, newNode){
//         if(newNode.value < root.value){
//             if(root.left == null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left, newNode)
//             }
//         }else{
//             if(root.right == null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right, newNode)
//             }
//         }
//     }

//     inOrder(root, arr){
//         if(root){
//             this.inOrder(root.left, arr)
//             console.log(root.value);
//             this.inOrder(root.right, arr)
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
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

//     delete(data){
//         this.root = this.deleteNode(this.root, data)
//     }

//     deleteNode(root, data){
//         if(root == null){
//             return root
//         }
//         if(data < root.value){
//             root.left = this.deleteNode(root.left, data)
//         }else if(data > root.value){
//             root.right = this.deleteNode(root.right, data)
//         }else{
//             if(!root.right && !root.left){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if (!root.right){
//                 return root.left
//             }
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right, root.value)
//         }
//         return root
//     }

//     minHight(node = this.root){
//         if(node == null){
//             return -1
//         }
//         let left = this.minHight(node.left)
//         let right = this.minHight(node.right)
//         if(left<right){
//             return left+1
//         }else{
//             return right+1
//         }
//     }

//     maxHight(node = this.root){
//         if(node == null){
//             return -1
//         }
//         let left = this.maxHight(node.left)
//         let right = this.maxHight(node.right)
//         if(left<right){
//             return right+1
//         }else{
//             return left+1
//         }
//     }

//     isBalaced(){
//         return (this.maxHight() - this.minHight()) <= 0
//     }

//     isBst(){
//         let arr = []
//         this.inOrder(this.root, arr)
//         for(let i=0; i<arr.length;i++){
//             if(arr[i]<arr[i-1]){
//                 return false
//             }
//         }
//         return true
//     }
// }



// const bst = new Bst()
//     bst.insert(9)
//     bst.insert(4)
//     bst.insert(3)
//     bst.insert(6)
//     bst.insert(5)
//     bst.insert(7)
//     bst.insert(17)
//     bst.insert(22)
//     bst.insert(20)
//     bst.insert(10)
// // console.log(bst.search(bst.root, 10));
// // bst.preOrder(bst.root)
// // bst.inOrder(bst.root)
// // bst.postOrder(bst.root)
// // bst.delete(9)
// // bst.levelOrder()
// // console.log(bst.min(bst.root));
// // console.log(bst.max(bst.root));
// console.log("Min Height is ", bst.minHight())
// console.log("Max Height is ", bst.maxHight())
// console.log(bst.isBalaced());
// console.log(bst.isBst());


// class MinHeap {
//     constructor() {
//         this.heap = []
//         this.size = 0
//     }

//     parent(index) {
//         return Math.floor((index - 1) / 2)
//     }

//     left(index) {
//         return 2 * index + 1
//     }

//     right(index) {
//         return 2 * index + 2
//     }

//     hasParent(index) {
//         return this.parent(index) >= 0
//     }

//     hasLeft(index) {
//         return this.left(index) < this.size
//     }

//     hasRight(index) {
//         return this.right(index) < this.size
//     }

//     swap(i1, i2) {
//         [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
//     }

//     insert(value) {
//         this.heap.push(value)
//         this.size++
//         this.heapifyUp(this.size - 1)
//     }

//     heapifyUp(index) {
//         while (this.hasParent(index) && this.heap[this.parent(index)] > this.heap[index]) {
//             this.swap(this.parent(index), index)
//             index = this.parent(index)
//         }
//     }

//     display() {
//         console.log(this.heap);
//     }

//     delete() {
//         this.heap[0] = this.heap[this.size - 1]
//         this.heap.pop()
//         this.size--
//         this.heapifyDown(0)
//     }

//     heapifyDown(index) {
//         let small = index
//         const left = this.left(index)
//         const right = this.right(index)
//         if(left < this.size && this.heap[this.left(index)] < this.heap[small]){
//             small = left
//         }
//         if(right < this.size && this.heap[this.right(index)] < this.heap[small]){
//             small = right
//         }

//         if(small !== index){
//             this.swap(index, small)
//             this.heapifyDown(small)
//         }
//     }

//     heapify(index, size){
//         let small = index
//         let left = this.left(index)
//         let right = this.right(index)
//         if(left < size && this.heap[left] < this.heap[small]){
//             small = left
//         }
//         if(right<size&& this.heap[right] < this.heap[small]){
//             small = right
//         }

//         if(small !== index){
//             this.swap(small, index)
//             this.heapify(small, size)
//         }
//     }

//     sort(){
//         let size = this.size-1
//         for(let i=size;i>0;i--){
//             this.swap(0,i)
//             this.heapify(0, i)
//         }
//     }
// }

// const minHeap = new MinHeap()
// minHeap.insert(5)
// minHeap.insert(20)
// minHeap.insert(10)
// minHeap.insert(8)
// minHeap.insert(7)
// minHeap.delete()
// minHeap.display()
// minHeap.sort()
// minHeap.display()


// class Graph{
//     constructor(){
//         this.adjList = {}
//     }

//     addVertex(v){
//         if(!this.adjList[v]){
//             this.adjList[v] = new Set()
//         }
//     }

//     addEdge(v1,v2){
//         if(!this.adjList[v1]){
//             this.addVertex(v1)
//         }
//         if(!this.adjList[v2]){
//             this.addVertex(v2)
//         }
//         this.adjList[v1].add(v2)
//         this.adjList[v2].add(v1)
//     }

//     display(){
//         for(let adj in this.adjList){
//             console.log(adj +" -> "+[...this.adjList[adj]]);
//         }
//     }

//     removeEdge(v1,v2){
//         this.adjList[v1].delete(v2)
//         this.adjList[v2].delete(v1)
//     }

//     removeVertex(v){
//         if(!this.adjList[v]) return
//         for(let adj of this.adjList){
//             this.removeEdge(adj, v)
//         }
//         delete this.adjList[v]
//     }

//     bfs(start){
//         const visited = {}
//         const queue = []

//         visited[start] = true
//         queue.push(start)

//         while(queue.length){
//             const curr = queue.shift()
//             console.log(curr);

//             for(const adj of this.adjList[curr]){
//                 if(!visited[adj]){
//                     visited[adj] = true
//                     queue.push(adj)
//                 }
//             }
//         }
//     }

//     dfs(start){
//         let visited = {}
//         let stack = []

//         visited[start] = true
//         stack.push(start)
//         while(stack.length){
//             let curr = stack.pop()
//             console.log(curr);
//             for(let adj of this.adjList[curr]){
//                 if(!visited[adj]){
//                     visited[adj] = true
//                     stack.push(adj)
//                 }
//             }
//         }

//     }

//     cyclic(){
//         for(let adj in this.adjList){
//             if(this.adjList[adj].has(adj)){
//                 return true
//             }
//         }
//     }
// }

// const graph = new Graph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addEdge("A","B")
// graph.addEdge("B","C")
// // graph.removeVertex("B")
// graph.addEdge("A","A")
// console.log("Cyclic finding is : ",graph.cyclic());
// graph.display() 
// graph.dfs("A")
// // console.log(graph.hasEdge("A","C"));


class Trie{
    constructor(){
        this.root = []
    }

    insert(word){
        let node = this.root
        for(let char of word){
            let index = char.charCodeAt(0)-'a'.charCodeAt(0)
            if(!node[index]){
                node[index] = []
            }
            node = node[index]
        }
        node.push(word)
    }

    delete(word){
        if(!this.search(word)) return false
        let node = this.root
        for(let char of word){
            let index = char.charCodeAt(0)-'a'.charCodeAt(0)
            node = node[index]
        }
        const wordIndex = node.indexOf(word)
        node.splice(wordIndex, 1)
        return true
    }

    search(word){
        let node = this.root
        for(let char of word){
            let index = char.charCodeAt(0)-'a'.charCodeAt(0)
            if(!node[index]){
                return false
            }
            node = node[index]
        }
        return node.includes(word)
    }

    startsWith(prefix){
        let node = this.root
        for(let char of prefix){
            let index = char.charCodeAt(0)-'a'.charCodeAt(0)
            if(!node[index]){
                return false
            }
            node = node[index]
        }
        return true
    }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"))
console.log(trie.search("app"));
console.log(trie.startsWith("app"))
trie.delete("apple");
console.log(trie.search("apple"));