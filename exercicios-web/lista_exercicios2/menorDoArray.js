function menorNumero(array){
    let menorNumero = array[0]
    for(let i=1; i < array.length; i++){
        if(array[i] < menorNumero){
            menorNumero = array[i]
        }
    }

    console.log(menorNumero)
    return menorNumero
}

menorNumero([10, 5, 35, 65]) // retornarĂ¡ 5
menorNumero([5, -15, 50, 3]) // retornarĂ¡ -15