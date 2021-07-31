let comparaComThis = function (param){
    console.log(this===param)
}

comparaComThis(global) // o this é igual ao parametro que eu pasei, o objeto global é igual ao this, da true

const obj = {}
comparaComThis = comparaComThis.bind(obj) // toda vez que eu chamar vai apontar para obj e não mais pro global 
comparaComThis(global) // agora da false, então é algo a se ter cuidado por conta da variação do this
comparaComThis(obj)


// Fazendo o mesmo com arrow 

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // Ele da false pq com arrow ela é definida dentro de um contexto
comparaComThisArrow(module.exports)


comparaComThisArrow = comparaComThisArrow.bind(obj) // mesmo forçando com bind ele não vai mudar o arrow mantem apontado pro objeto
comparaComThisArrow(obj) // o this de uma função arrow é associado a função qeu ele foi escrita e ponto final.



