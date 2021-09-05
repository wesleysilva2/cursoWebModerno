function calculaMedias(array){
    let media = 0
    let soma = 0 
    for(let i=0; i < array.length; i++){
        soma = soma + array[i]
    } 

    media = soma / array.length

    console.log(media)
    return media
}

calculaMedias([0, 10])  // retornará 5
calculaMedias([1, 2, 3, 4, 5]) // retornará 3



