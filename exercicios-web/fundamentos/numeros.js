const peso1 = 1.0
const peso2 = Number('2.3')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) // checa se é um valor inteiro
console.log(Number.isInteger(peso2))

const avalizacao1 = 9.871 
const avalizacao2 = 6.871 

const total = avalizacao1 * peso1 + avalizacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // Caso vc coloque o valor 2 por exemplo ele transforma em binario
console.log(typeof media) // tipo
console.log(typeof Number) // Tipo função

console.log((10.3456232).toFixed(2)) // Colocando apenas 2 casas decimais, aproximando.