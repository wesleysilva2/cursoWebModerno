const alunos = [
    { nome: 'Ede', nota: 7.3, bolsista: false },
    { nome: 'Wesley', nota: 9.2, bolsista: true },
    { nome: 'Keko', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]


// Solução do cara do CURSO 

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))


//Minhas soluções 
//Desafio1: Todos os alunos são bolsistas ?

const resultado1 = alunos.map(a => a.bolsista).reduce(function(checa, deAgora){
    for(let i = 0; i < alunos.length; i++){
        if(deAgora == false || checa == false ){
            return false
        }else{
            return true
        }
    }
})
console.log(resultado1)

//Desafio2: Algum aluno é bolsistas ?

const resultado2 = alunos.map(a => a.bolsista).reduce(function(checa, deAgora){
    for(let i = 0; i < alunos.length; i++){
        if(deAgora == true || checa == true){
            return true
        }else{
            return false
        }
    }
})

console.log(resultado2)