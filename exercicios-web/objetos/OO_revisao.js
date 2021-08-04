// coleção dinamica de pares chave/valor, criação e exclusão 
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220 

console.log(produto)
delete produto.preco
delete produto['marca do produto']

console.log(produto)


const carro = {
    modelo: 'Ferrari',
    valor: 890000,
    proprietario:{
        nome: 'Paula',
        idade: 35,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{ // criando dois objetos da classe condutores
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 21
    }],
    calcularValorSeguro: function(){ // pode ter uma função 
        //....
    }

}


carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante' // É bom para acessar como string

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores) // Se ele buscar algo e não existir ele da undefined