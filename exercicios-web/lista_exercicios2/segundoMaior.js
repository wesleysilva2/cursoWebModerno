function segundoMaior(numeros) { // Solução da Lista 
    let indiceDoMaior = 0
    let segundoMaior
    numeros.forEach( (numero, indice) => {
    if( numero > numeros[indiceDoMaior] )
    indiceDoMaior = indice
    })
    numeros.splice(indiceDoMaior, 1)
    segundoMaior = numeros[0]
    numeros.forEach(numero => {
    if(numero > segundoMaior)
    segundoMaior = numero
    })
    console.log(segundoMaior)
    return segundoMaior
}

segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6
    