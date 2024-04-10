const reverseStrings = function (s) {
    const splits = s.split(" ")
    const stack = []

    for (const i of splits) {
        stack.push(i)
    }
    
    let res = ""
    while (stack.length) {
        const curr = stack.pop()
        if(curr){
            res += " "+ curr
        }
    }
    return res.trim()
}
console.log(reverseStrings("the sky is blue"));
console.log(reverseStrings("  hello world  "));
console.log(reverseStrings(" a good   example"));