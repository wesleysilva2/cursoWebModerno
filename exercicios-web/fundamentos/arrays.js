const valores = [7.2, 7.3, 6.3, 9.2]
console.log(valores[0], valores[3])

console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // No JS da pra colocar varias variaveis diferentes no array

console.log(valores)

console.log(valores.pop())
delete valores[0] // Excluindo valor dessa posição no array
console.log(valores)