const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // Pegar multiplos elementos de um array e desestrururar para um print
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // Veja ele pegando apenas o 6 
console.log(nota)