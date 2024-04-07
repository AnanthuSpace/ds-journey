var isPalindrome = function(x) {
    return x === +x.toString().split("").reverse().join("")
};

console.log(isPalindrome(121));
console.log(isPalindrome(12));

