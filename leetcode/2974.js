var numberGame = function(nums) {
    let arr = []
    let sorted = nums.sort((a,b)=>a-b)
    for(let i=0; i<nums.length; i++){
        arr.push(sorted[i+1])
        arr.push(sorted[i])
        i++
    }
    return arr
};

console.log(numberGame([17,2,4,11,14,18]));

// Expected Output [4,2,14,11,18,17] 