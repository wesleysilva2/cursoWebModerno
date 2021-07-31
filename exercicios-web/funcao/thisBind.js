const pessoa = { // Criando um objeto
    saudacao:   'Bom dia !',
    falar(){ // um metodo 
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO por isso undefined

const falarDePessoa = pessoa.falar.bind(pessoa) // É pra garantir que sempre vai apontar pro objeto
falarDePessoa() // O bind é utilizado para amarrar aquela execução a o objeto e não acontecer conflitos

