// novo recurso do ES2015

const pessoa = {
    nome: 'Ede',
    idade: 17,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}

const { nome, idade } = pessoa // Usando destructuring estou pegando o atributo nome e idade do objeto pessoa 
console.log(nome, idade) // ai posso imprimir, isso é util para tirar valores que eu quero 

const { nome: n, idade: i } = pessoa // criando variaveis para os valores do objeto 
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) 

const { endereco: { logradouro, numero, cep } } = pessoa // Extraindo endereço numero e cep do objeto pessoa 
console.log(logradouro, numero, cep)
/*
const { conta: { ag, num } } = pessoa // Como não existe isso na classe vai dar erro pois não ta 
console.log(ag, num)

*/