//Diferença de programa com e sem callback 


const notas = [7.7, 2.4, 6.2, 8.2, 7.4, 4.9, 9.4, 10, 4.2, 5.7]


// Sem Callback 

let notasBaixas = []

for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i]) // Colocando as notas baixas no vetor 
    }
}

console.log(notasBaixas)


// Com callback 

notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

// Com callback e Arrow

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)