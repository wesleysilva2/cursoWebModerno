// o this ele aponta pra modulos ponto export 

console.log(this === global) // é falso por que o this não aponta pra global, ele aponta pra module .exports 
console.log(this === module)

console.log(this === module.exports) // aqui sim da true
console.log(this === exports) // também real


function logThis(){
    console.log('Dentro de uma função....Deve dar falso')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) // Dentro de uma função ele aponta pra global, aqui da true
}

logThis() // O this dentro de uma função não aponta para o exports 


