// Por aqui vamos acessar os modulos A e B

const moduloA = require('./moduloA') // Para importar do modulo A, caso fosse outra pasta teria que por o caminho
const moduloB = require('./moduloB')


console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)





