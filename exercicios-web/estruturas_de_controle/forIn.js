const notas = [7.3, 6.1, 8.2, 3.1, 4.9, 8.4, 7.5, 4.2, 5.6]


for(i in notas){
    console.log("indice:"+ i, notas[i])
}


const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}


for(atributo in pessoa){ // É interessante fazer isso com objetos, não tanto com arrays em JS 
    console.log(`${atributo} = ${pessoa[atributo]}`) // veja que ele vai percorrer todos os atributos do objeto
}