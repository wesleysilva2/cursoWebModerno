let valor // não inicializada então da undefined
console.log(valor)

valor = null // ausência de valor, quando vc quer que a variavel não aponte para nada 
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco) // convertendo pra boolean 
console.log(produto)
