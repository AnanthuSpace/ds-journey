const str = "hello"

function reverse(str){
  if(str.length<=1){
    return str
  }else{
    return reverse(str.slice(1))+str[0]
  }
}

console.log(reverse(str));