// Utiliza uma função sobre um acumulador, seria quase um sinônimo para array com elementos a cada elemento do array
// da esquerda para a direita ou de baixo para cima, reduzindo-a a um unico valor 

const alunos = [
    { nome: 'Ede', nota: 7.3, bolsista: false },
    { nome: 'Wesley', nota: 9.2, bolsista: true },
    { nome: 'Keko', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota)) // printando as notas dos alunos 
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) { // extraindo dos alunos apenas a nota 
    console.log(acumulador, atual)
    return acumulador + atual // esse reduce  esta somando as notas do lado direito o acumulador e o esquerdo o atual
}, 0) // Passando um valor inicial para o acumulador, começando com zero

console.log(resultado)