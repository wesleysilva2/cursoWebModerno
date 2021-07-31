// Arrow so faz uma coisa, o que é muito interessante para o reuso 
// o codigo fica muito mais funcional com o arrow

let dobro = function (a){ // Função Normal
    return 2 * a
}

dobro = (a) => { // Função arrow
    return 2 * a
}

dobro = a => 2 * a // Return implicito

let ola = function(){
    return 'Ola'
}

ola = () => 'Olá'

console.log(ola())

