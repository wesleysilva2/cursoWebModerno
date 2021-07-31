class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Ede')
p1.falar()


const criarPessoa = nome => { // A diferença é que esse objeto tem ciencia do contexto lexico que ele foi declarado 
    return { // Tanto que ele descarta o uso do this
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}


const p2 = criarPessoa('Keko')
p2.falar()