function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada){ 
    const newArray = []
    for(numero of numeros){
        const quantidadeDeDigitos = String(numero).length
        if(quantidadeDeDigitos === quantidadeDesejada)
        newArray.push(numero)
        }
        console.log(newArray)
        return newArray

    }

filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornarĂ¡ [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornarĂ¡ [5, 9, 1]
