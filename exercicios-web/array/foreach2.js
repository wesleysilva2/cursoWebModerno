Array.prototype.forEach2 = function(callback){ // Criando uma função para simular um foreach
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this) // é o indice o priprio elemento e o array completo
    }
}

const aprovados = ['Agata', 'Aldo','Daciel','Wesley','Keko']

aprovados.forEach2(function(nome, indice) {

    console.log(`${indice + 1} ${nome}`)

})



