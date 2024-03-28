function binarySearch(n,t){     //O(logn)
    let leftIndex = 0
    let rightIndex = n.length-1
    while (leftIndex<=rightIndex) {
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)
        if(t === arr[middleIndex]){
            return middleIndex
        } 
        if(t < arr[middleIndex]){
            rightIndex =middleIndex-1
        }else{
            leftIndex = middleIndex+1
        }
    }
    return -1
}



let arr = [-5,2,4,6,10]
let target = 6
console.log(binarySearch(arr,target));