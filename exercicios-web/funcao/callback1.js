// CallBack a ideia é você passar uma função para uma outra função para outra função e quando
// Um determinado evento acontecer essa função passada vai ser disparada, pode ser varias vezes ou uma unica vez  

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // Pra cada elemento ele vai chamar de volta, pra cada elemento, é um call back

fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})