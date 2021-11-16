require('./global')


console.log(MinhaApp.saudacao()) // chamando a função do global


MinhaApp.nome = 'Avemaria' // não é bom poder alterar em qualquer lugar, por isso foi usado freeze na função
console.log(MinhaApp.nome) // e por isso não mudou nome nenhum aqui





