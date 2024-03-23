const number = function(arr){  //4 operations 
    for(let i=0; i< arr.length; i++){
        if(i===4) return arr[i]
    }
}


const numbers = function (arr){ // 1 operation
    return arr[4]
}

let nums = [1,2,3,4,5,6,7]

console.time("numbers")
console.log(numbers(nums));
console.timeEnd("numbers")