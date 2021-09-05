/*
function receberSomentePares(numeros) {
    let resultado = []
    for(let i = 0; i < numeros.length; i += 2){
        const numeroPar = numeros[i] % 2 === 0
        if(numeroPar)
        resultado.push(numeros[i])
    }
    return resultado
}

Outra forma

*/

function receberSomentePares(array){ // Minha forma 
    const newArray = []
    for(let i=0; i < array.length; i++){
        if(array[i] % 2 == 0 && i % 2 == 0){ // nesse for o i esta representando o indice do array
            newArray.push(array[i])
        }
    }
    console.log(newArray)
    return newArray
}


receberSomentePares([1, 2, 3, 4])
receberSomentePares([10, 70, 22, 43])