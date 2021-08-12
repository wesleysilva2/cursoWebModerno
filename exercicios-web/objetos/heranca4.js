function MeuObjeto(){}

console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

// Uma vez que eu crio dois objetos a partir de uma mesma função construtora
console.log(obj1.__proto__ === obj2.__proto__) // os prototipos vão apontar para o mesmo objeto ? a resposta é Sim

console.log(MeuObjeto.prototype === obj1.__proto__)


MeuObjeto.prototype.nome = 'Anônimo' // qualquer função qeu for criada vai dar o atributo nome no prototipo como o pai
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)


/*
Basicamente é entender que quando você cria um objeto a partir de uma função o objeto esse objeto criado tem
uma função prototipe apontando para esse objeto 
*/




