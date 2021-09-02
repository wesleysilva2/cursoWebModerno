/* Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

Podia usar um For.... ou ifs... 
*/ 

function nomeDoMes(a){
const meses = ['nãoExisteMesZero','janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

console.log(meses[a])
}

nomeDoMes(0)
nomeDoMes(2)
nomeDoMes(12)
nomeDoMes(8)
nomeDoMes(13) // Ele retorna Undefined caso seja fora do escopo