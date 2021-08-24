// Filter ele te retorna um array reduzido dependendo do que vc quiser
// filtrar as informações que estão no array 

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) { // filter retorno um array de mesmo tamanho ou menor
    return false // se deixar assim no final vai ter um array vazio
}))

console.log(produtos.filter(function(p) { 
    return p.preco < 2500
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))


