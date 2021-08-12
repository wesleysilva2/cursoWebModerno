// Um objeto tem uma referencia para o seu prototipo e assim que é herança em js,
// pode ter um atributo que não tem no filho e ele procura no pai e no pai do pai até achar
// Assim evitando ter que reescrever atibutos mais de 1 vez 

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 240
}

console.log(ferrari.__proto__)// Assim eu posso acessar o objeto pai pra procurar algo la no objeto pai

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // É quando não tem mais nada em cima como pai, ele ja é o maior pai

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)