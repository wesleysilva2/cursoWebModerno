// Elementos do tipo JSON

Array.prototype.map2 = function(callback){ // iSSO AQUI É SIMULANDO O COMPOTAMENTO INTERNO DE UM MAP
    const newArray = []
    for(let i = 0; i < this.length; i++){

        newArray.push(callback(this[i], i, this)) // é o indice o priprio elemento e o array completo
    }
    return newArray
}


const carrinho = [  
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json) // Transformando os elementos do JSON em objetos
const apenasPreco = produto => produto.preco // Pegando o preco 


let resultado =  carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)
