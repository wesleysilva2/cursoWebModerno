console.log(global) // é o objeto global do node, tem varias coisas dentro dele
// tem que ter cuidado em usar coisas globais, ja que é algo compartilhado entre tudo


global.MinhaApp = Object.freeze( { // Agora todos os programas teram acesso a esse codigo pelo global caso o importem
    saudacao(){
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
}) // freeze para congelar esse objeto e não deixar ele ser alterado 




