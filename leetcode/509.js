var fib = function(n){
    return (n<=1) ? n : (fib(n-1)+fib(n-2))
}

console.log(fib(3));
console.log(fib(2));
console.log(fib(4));