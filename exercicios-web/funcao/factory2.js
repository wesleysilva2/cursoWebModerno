function criarProduto(nome = 'Sem Nome', preco = 0){ // Factory fabrica objetos 
    return{
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto())
console.log(criarProduto('Leite', 6))
console.log(criarProduto('Arroz', 10))