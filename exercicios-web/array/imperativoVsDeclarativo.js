const alunos = [
    { nome: 'Ede', nota: 7.3  },
    { nome: 'Wesley', nota: 9.2 },
    { nome: 'Keko', nota: 9.8 },
    { nome: 'Ana', nota: 8.7 }
]


// Imperativo, no imperativo os passos são mais importantes do que o resultado, diferente do declarativo
let total1 = 0 
for (var i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length) // Uma abordagem mais imperativa de pegar a media 

// Declarativa, a abordagem declarativa é mais interessante por que ela é muito mais reusavel do que a de cima 
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual // soma para agregar os valores 
const total2 = alunos.map(getNota).reduce(soma) // É uma outra caracteristica do reduce de agregar em um lugar so, nesse caso somando

console.log(total2/ alunos.length)

// Declarativa é muito mais preocupado em dizer o que se quer e não como vc vai conseguir o que quer 