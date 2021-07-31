// Uma função anonima é uma função sem nome 

const soma = function (x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma) // chamando função soma
imprimirResultado(3, 4, function(x,y){ // chamada assim são bem comuns em JS 
    return x - y // usando outra operação
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function(){
        console.log('Eita Rapaz')
    }
}

pessoa.falar()

// Todas as funções dessses exemplos são anonimas, é algo bem comum 