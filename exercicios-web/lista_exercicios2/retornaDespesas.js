function retornaDespesas(gastos){
    let soma = 0
    
    for(let unidade of gastos){
        soma = soma + unidade.preco
    }
    console.log(soma)
    return soma
}


retornaDespesas([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornará 239.99

retornaDespesas([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]) // retornará 34599.89