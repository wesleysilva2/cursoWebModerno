console.log(soma(3,4))


// Functio declaration 

function soma(x, y) {
    return x + y
}


// function expression só pode ser usada após ela ser declarada 

const sub = function (x, y){
    return x - y 
}

console.log(sub(3,4))
// named function expression só pode ser usada após ela ser declarada 
const mult = function mult(x, y){
    return x * y
}

console.log(mult(3,4))