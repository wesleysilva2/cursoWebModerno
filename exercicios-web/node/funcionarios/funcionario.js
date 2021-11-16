const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // ele é o cliente http, ele faz requisições pra obter informações de algo que esta remoto
// Funções aqui 
const chineses = f => f.pais === 'China' // Onde nas base de dados o pais for china
const mulheres = f => f.genero === 'F' // Retorna so quem é mulher da base de dados 
const menorSalario = (func, funcAtual) =>{ // Ele vai pegar o menor salario, sempre comparando com o anterior
    return func.salario < funcAtual.salario ? func : funcAtual // o simbolo : quer dizer caso o func seja menor vai ele caso não o outor e a ? é a pergunta
}


axios.get(url).then(response =>{ // aqui eu vou estar pegando os dados do arquivo que o axios pegou
    const funcionarios = response.data
    //console.log(funcionarios) // ele printou os primeiros 100 da lista 
    const name = funcionarios[1].salario
    
    //Mulher chinesa com o menor salario ?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    
    console.log(func)
})


/* Forma que eu fiz

for(let i=0; i <= funcionarios.length; i++){
        if(funcionarios[i].pais == 'China' && funcionarios[i].genero == 'F'){
            aux = funcionarios[i].salario
            if(aux > salarioC){
                salarioC = aux
                nameC = funcionarios[i].nome
            }
        }
    }
}

*/









