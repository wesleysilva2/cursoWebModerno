// O map ele serve para fazer uma transformação no array, ele serve para mapear um array para 
// outro array do MESMO TAMANHO, ja com os dados mapeados ou transformados

const nums = [1, 2, 3, 4, 5]

// O map é um for com um proposito, ele vai transformar em algo, nesse caso dobrar os valores

let resultado = nums.map(function(e){ // Essa função vai retornar um array resultado dobrado

    return e * 2

})

console.log(nums)
console.log(resultado) // ele gera um novo array 

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` // convertendo pra real

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // Veja que eu estou fazendo as tres coisas ao mesmo tempo
console.log(resultado)







