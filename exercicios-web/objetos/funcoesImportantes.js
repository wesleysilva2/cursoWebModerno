const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // pegando apenas os nomes dos atributos
console.log(Object.values(pessoa)) // os valores dos atributos 
console.log(Object.entries(pessoa)) // Aqui passa tanto os valores quando as chaves 

Object.entries(pessoa).forEach(([chave, valor]) => { // Percorrendo o array do object
    console.log(`${chave}: ${valor}`) // cada elemento seria um atributo e seu valor
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false, // com isso essa data nunca vai poder ser rescrita
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)