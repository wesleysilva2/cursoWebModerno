console.log(module.exports)
console.log(module.exports === this) // esse exports é para eu colocar coisas visiveis fora do arquivo
console.log(module.exports === exports) // sempre que quiser exportar, usa module.export


this.a = 1
exports.b = 2
module.exports.c = 3

exports = null // mesmo colocando null em export ele não deixa de apontar para as variaveis que ele esta atribuida
console.log(module.exports)

exports = { // outra tentativa de mudar a referencia do exports, mas ele sempre vai apontar 
    nome: 'Teste'
}

console.log(module.exports)

module.exports = {public: true}
