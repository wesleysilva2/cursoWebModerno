const escola = "Cod3r"

console.log(escola.charAt(4)) // ele retorna a letra da posição passada
console.log(escola.charCodeAt(3)) // Valor do char dentro da tabela ASC
console.log(escola.indexOf('d')) // Retorna a posição na string do elemento 

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // com essas funções eu posso printar a parte que quero da string

console.log("Escola ".concat(escola).concat(" !"))
console.log(escola.replace(3, 'e')) // trocando o 3 por e

console.log("Ana, Maria, Pedro".split(',')) // transformando em um array


// USANDO TEMPLATE STRING

const nome = 'Rebeca'

const concatenacao = 'Ola ' + nome + ' !' // Imagina se fosse maior a mensagem ia ser chato

const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)


// expressoes....
console.log(`1 + 1 = ${1 + 1}`)


const up = string => string.toUpperCase() // Colocando para letra Maiuscula

console.log(`Ei..... ${up("cuidado")}!!!`)