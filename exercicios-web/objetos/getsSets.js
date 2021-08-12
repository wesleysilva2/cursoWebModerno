const sequencia = {
    _valor: 1, // É uma convenção, com o _ vc esta mostrando que é interessante ser privada, mas não impede a alteração
    get valor(){
        return this._valor++
    },
    set valor(valor) { // se vc usar get e set ele permite a sobrecarga, que seria funções com o mesmo nome
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) // aqui é chamando o  GET

sequencia.valor = 1000 // Aqui é chamando o SET

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900

console.log(sequencia.valor, sequencia.valor)