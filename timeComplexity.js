const number = function(arr){  //4 operations    O(n)
    for(let i=0; i< arr.length; i++){
        if(i===4) return arr[i]
    }
}


const numbers = function (arr){ // 1 operation    O(1)
    return arr[4]
}

let nums = [1,2,3,4,5,6,7]

// console.time("numbers")
// console.log(numbers(nums));
// console.timeEnd("numbers")



// Second largest element

const arr = [ 3,6,2,3,6,2,5]

const newArr = Array.from(new Set(arr)) // O(n)
newArr.sort((a,b)=>b-a)  // O(n log n)
// console.log(newArr[1]);

// there for all complexity of this program is O(nlogn)




// Optimise solution of second largest element 

function secondLargest(arr){
    let largest = Number.NEGATIVE_INFINITY
    let secLargest = Number.NEGATIVE_INFINITY
    for(let i=0; i<arr.length; i++){
        if(largest<arr[i]){
            secLargest = largest
            largest = arr[i]
        } else if(largest!== arr[i]  && secLargest<arr[i]){
            secLargest = arr[i]
        }
    }
    return secLargest
}

// Time complexity = O(n)
// Space complexity = O(1)

console.log(secondLargest(arr));

