// Uma função Factory é uma função que retorna um OBJETO 

const prod1 = {
    nome: "Leite",
    preco: 15
}


const prod2 = {
    nome: "Arroz",
    preco: 12
}

// Perceba que se fizer assim seria muitas vezes repetido se fosse pra um numero grande de produtos 

// Por isso usamos o Fatory

function criarPessoa(){ // Factory fabrica objetos 
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())