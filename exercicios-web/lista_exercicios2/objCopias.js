function removerPropriedade(objects,propriedadeR){

    const copia = Object.assign({}, objects)
    delete copia[propriedadeR]
    
    console.log(copia)
    return copia

}

removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}

removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}