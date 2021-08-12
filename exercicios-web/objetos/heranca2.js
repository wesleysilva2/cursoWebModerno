// Cadeia de prototipos (Prototype chain)

Object.prototype.attr0 = 'Z' // Não faça isso em casa 

const avo = {attr1: 'A'}// o avo tem como prototipo o Object.prototype
const pai = {__proto__:avo, attr2: 'B',attr3: '3'} // o pai tem como prototipo o avo
const filho = {__proto__:pai, attr3: 'C'} // o filho tem como prototipo o pai

console.log(filho.attr1) // Ele imprime o do Avo
console.log(filho.attr0,filho.attr1,filho.attr2,filho.attr3,filho.attr6) // Nem o prototipe tem

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing quando vc tem uma variavel dentro de uma função e essa variavel vai sombrear algo que esta fora do escopo dessa função
}

const volvo = {
    modelo: 'V40',
    status() { // Sombreando usando o super 
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) // Ferrari tem carro como seu prototipo ou pai 
Object.setPrototypeOf(volvo, carro)// Essa função estabelece um prototipo para os objetos é muito util 

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100) // utilizando os metodos do prototipo pai 
console.log(volvo.status()) // utilizando os metodos do prototipo pai 

ferrari.acelerarMais(300)
console.log(ferrari.status())