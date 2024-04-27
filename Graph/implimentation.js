// Adjacency Matrix 

// const matrix = [
//     [0,1,0],
//     [1,0,1],
//     [0,1,0]
// ]

// console.log(matrix[0][2]);


// Adjacency List 

// adjacencyList = {
//     'A':['B'],
//     'B':['A','C'],
//     'C':['B']
// }

// console.log(adjacencyList['B']);



class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    // Add Vertex
    AddVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    // Add Edges
    AddEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.AddVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.AddVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }

    hasEdge(vartex1, vertex2){
        return (
            this.adjacencyList[vartex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vartex1)
        )
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
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
graph.AddVertex("A")
graph.AddVertex("B")
graph.AddVertex("C")
graph.AddEdge("A","B")
graph.AddEdge("B","C")
graph.removeVertex("B")
console.log("Cyclic finding is : ",graph.cyclic());
graph.display() 
// console.log(graph.hasEdge("A","C"));
