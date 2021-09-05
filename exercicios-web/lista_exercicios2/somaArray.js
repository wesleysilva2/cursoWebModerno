function somaNuemros(array){
    let cont = 0
    array.forEach(function(numeros){
        cont = cont + numeros
    })
    console.log(cont)
    return cont
}

somaNuemros([10, 10, 10])
somaNuemros([15, 15, 15, 15])