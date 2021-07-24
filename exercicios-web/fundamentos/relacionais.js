// Nos relacionais o resultado é sempre verdadeiro ou falso 

console.log('01)', '1' == 1) // Ele da verdade pq eu me preocupo com o valor e não com o tipo
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3) // da diferente por que com dois ele ver o tipo também 

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // É melhor usar essa igualdade que leva em consideração os tipos das variaveis
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)