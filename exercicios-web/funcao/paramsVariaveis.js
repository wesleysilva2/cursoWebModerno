function soma(){
    let soma = 0
    for (i in arguments){ // Vou pegar o indice de cada elemento do array, posse pegara cada indice e ir somando
        soma += arguments[i]
    }
    return soma
}

console.log(soma())//A função não tem parametros obrigatorios, vai somar o que for colocado
console.log(soma(1))
console.log(soma(2,3,6))// Ele vai somar qualquer valor que vc colocar aqui