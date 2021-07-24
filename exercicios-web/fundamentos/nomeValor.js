// par nome/valor

const saudacao = 'Massa' // contexto léxico 1 é o local onde sua variavel foi definida fisicamente no seu codigo

function exec() {
    const saudacao = "Iai pai" // contexto léxico 2, aqui ele so esta no contexto da função
    return saudacao // caso ele não ache aqui saudacao ele pega no contexto 1 
}


// Obetos são grupos aninhados de pares nome/valor 

const cliente = { 
    nome: "Ede",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Barril dobrado',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)



















