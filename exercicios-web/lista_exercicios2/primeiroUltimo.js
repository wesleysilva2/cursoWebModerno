function primeiroUltimo(a){
    const newArray = []
    const indiceDoPrimeiroElemento = 0
    const indiceDoUltimoElemento = a.length - 1
    const primeiroElemento = a[indiceDoPrimeiroElemento]
    const ultimoElemento = a[indiceDoUltimoElemento]
    
    newArray.push(primeiroElemento)
    newArray.push(ultimoElemento)
    console.log(newArray)
}

primeiroUltimo([2,3,54,1,123,131,2312,12,31,242])