console.log(typeof Array, typeof new Array, typeof []) // Um array é um objeto especial, trabalha de forma indexada e dinamica 


let aprovados = new Array('bia', 'carlos', 'ana') // Não muito recomendado dessa forma

console.log(aprovados)


aprovados = ['bia', 'carlos', 'ana'] // Assim é mais interessante de se chamar
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2]) // Como chamar por indice 
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)


aprovados[9] = 'Rafa'
console.log(aprovados.length)

console.log(aprovados[8] === undefined)

console.log(aprovados)

aprovados.sort() // Com essa função ele organizar o array 
console.log(aprovados)

delete aprovados[1] // excluir um elemento do array 
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1,1) // ela serve para remover elementos do array e também serve pra adicionar ao mesmo tempo 
                        // eu digo no primeiro item o indice que eu quero trabalhar e a quantidade de elementos no caso 1 começando a partir da posição 
aprovados.splice(1,2, 'Elemento1', 'Elemento2') // Pra adicionar itens 
console.log(aprovados)               