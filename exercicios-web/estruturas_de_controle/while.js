// While é interessante quando vc não sabe a quantidade de vezes que vai precisar repetir

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // arredondando o valor
}

let opcao = 0 


while(opcao != -1){ // Continua enquanto for verdade
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log("Até a Next !!")