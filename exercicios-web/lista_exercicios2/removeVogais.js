function removeVogais(palavra){
    let newPalavra = palavra.replace(/[aeiou]/ig, '')
    console.log(newPalavra)
}

removeVogais("Cod3r") // retornará "Cd3r"
removeVogais("Fundamentos") // retornará "Fndmnts"

