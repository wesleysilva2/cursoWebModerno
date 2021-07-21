const prod1 = {} // Um objeto é sempre chave e valor, ele é uma coleção de pares chave e valor
prod1.nome = 'Celular Barril Dobrado'
prod1.preco = 4998.90
prod1['45 % de desconto massa'] = - 0.45 * 4998.90 // evitar atributos com espaço
console.log(prod1)

const prod2 = { // Estaos criando um objeto e colocando seus atributos, a chave nesse caso e o nome
    nome: 'Camisa Social',
    preco: 79.90
}

console.log(prod2)