const filhas = ['Keko', 'Cibalena']
const filhos = ['Wesley', 'Vitu']

const todos = filhas.concat(filhos, 'Fulano') // Unindo dois arrais em um so, posso até adicionar mais elementos 
console.log(todos, filhos, filhas)

console.log([].concat([1,2],[3,4],5,[[6,7],[4,2]])) // preechendo um array vazio com vetores, matriz e valores solitarios