//Função sem Retorno 
function imprimirSoma(a, b){ // Como é fracamente tipada vc não precisa definir tipo
    console.log(a+b)
}


imprimirSoma(2, 3)
imprimirSoma(2)



// Funçaõ com retorno

function soma(a, b = 1){ // Voce pode definir o valor e caso b não tenha parametro ele assumi o 1
    return a + b
}

console.log(soma(2,5))
console.log(soma(2))
