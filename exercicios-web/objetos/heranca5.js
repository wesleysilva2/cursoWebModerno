console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object) // toda função tem um atrivuto chamado .prototype 

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse()) // É para reverter toda a string

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () { // Vc esta sobrescrevendo uma função que ja existe la e isso não deve ser feito
    return 'Lascou tudo' // não subistitua comportamentos que ja existem, comportamentos globais
}

console.log('Escola Cod3r'.reverse())