// For each é um metodo para percorrer um array, 
//ele percorre e faz algo que você vai definir, ele só percorre

const aprovados = ['Agata', 'Aldo','Daciel','Wesley','Keko']

aprovados.forEach(function(nome, indice) {

    console.log(`${indice + 1} ${nome}`)

}) // Ele vai percorrer o array numerando as pessoas pelos seus indices, o + 1 é para começar com 1



aprovados.forEach(nome => console.log(nome)) // Aqui mais simplificados, so passa o nome

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados) // outra forma de fazer, colocando numa variavel


