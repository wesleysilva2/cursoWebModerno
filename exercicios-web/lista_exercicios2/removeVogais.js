function removeVogais(palavra){
    let newPalavra = palavra.replace(/[aeiou]/ig, '')
    console.log(newPalavra)
}

removeVogais("Cod3r") // retornarĂ¡ "Cd3r"
removeVogais("Fundamentos") // retornarĂ¡ "Fndmnts"

