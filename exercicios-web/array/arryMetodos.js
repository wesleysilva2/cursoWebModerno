const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Ele remove o ultimo elemento do array 
console.log(pilotos)

pilotos.push('Verstappen') // Coloca o item no array  
console.log(pilotos)

pilotos.shift() // Remove o primeiro do array 
console.log(pilotos)

pilotos.unshift('Hamilton')// Adiciona no começo do array
console.log(pilotos)


//splice pode adicionar e remover elementos 

//Adicionar 
pilotos.splice(2,0,'Bottas', 'Massa') // Adicionando depois do alonso
console.log(pilotos)


//Remover
pilotos.splice(3,1) // Removendo o da posição 3, o massa
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // Ele gera um Novo Array 
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // ele pega de um indice a outro que vc selecionar
console.log(algunsPilotos2)
