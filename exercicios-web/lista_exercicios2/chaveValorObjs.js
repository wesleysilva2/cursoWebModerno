function objetoParaArray(objeto){
    const newArray = []
    
    for (let chave in objeto)
    newArray.push([ chave , objeto[chave] ])


    console.log(newArray)
    return newArray
}

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]


objetoParaArray({
    codigo: 11111,
    preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]