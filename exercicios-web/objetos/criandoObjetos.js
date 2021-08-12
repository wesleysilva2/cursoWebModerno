//FORMAS DE CRIAR OBJETOS 

// usando a notação literal para criar objetos 

const obj1 = {} // como ja foi feito antes
console.log(obj1)

// Object em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Função construtoras 
function Produto(nome, preco, desc){ // preco e desc ficam encapsulados e nome esta vizivel
    this.nome = nome
    this.getPrecoComDesconto = () => { //Metodo publico
        return preco * (1 - desc)
    } 
}

// Posso acessar com p1.nome pois é publica, as outras não 

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Not', 2577.99, 0.25) 

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory, que é um padrão de projeto que é uma função que fabrica objetos 

function criarFuncionario(nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Marcele', 9500, 1)

console.log(f1.getSalario(), f2.getSalario())

// Outra forma é o Object.create 
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)