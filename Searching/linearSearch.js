function search(n,t){       //O(n)
    for(let i=0;i<n.length;i++){
        if(n[i]===t){
            return `Element found in indexof ${i}`
        }
    }
    return -1
}

let n =[1,2,3,4,5,6,7,8]
console.log(search(n,9));