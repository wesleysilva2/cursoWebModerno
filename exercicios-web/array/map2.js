// Elementos do tipo JSON

  const carrinho = [  
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json) // Transformando os elementos do JSON em objetos
const apenasPreco = produto => produto.preco // Pegando o preco 


let resultado =  carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)

