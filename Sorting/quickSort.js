function quickSort(arr){
    if(arr.length < 2) return arr
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}



console.log(quickSort([2,0,2,1,1,0]));
// Expected Output: [0,0,1,1,2,2]
console.log(quickSort([2,0,1]));
// Expected Output: [0,1,2]