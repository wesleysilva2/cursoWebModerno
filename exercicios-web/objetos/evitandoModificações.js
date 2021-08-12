// Object.preventExtensions
const produto = Object.preventExtensions({ // essa função não permite que seu objeto seja extendido
    nome: 'Qualquer', preco: 1.99, tag: 'promoção' // OU SEJA VC NÃO PODE ADICIONAR NOVOS ATRIBUTOS
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) // Quando vc sela um objeto vc não consegue adicionar nem excluir atributos, mas pode modificar
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes
