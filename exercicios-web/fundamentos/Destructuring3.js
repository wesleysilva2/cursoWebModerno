function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min // para ele dar um intervalo Randomico entre o maximo e o minimo
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))
//console.log(rand()) Aqui da problema por que ele ta desdestruturando algo que esta indefinido