function selectionSort(arr){
    let n = arr.length
    for(let i=0;i<n-1;i++){
        let minIndex = i
        for(let j=i+1; j<n; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}


console.log(selectionSort([2,0,2,1,1,0]));
// Expected Output: [0,0,1,1,2,2]
console.log(selectionSort([2,0,1]));
// Expected Output: [0,1,2]