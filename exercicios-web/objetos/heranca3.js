const pai = {nome: 'Pedro', corCabelo: 'Vermelho'}

const filha1 = Object.create(pai) // Ja estabelece uma função de prototipo 
console.log(filha1.corCabelo) // assim ele ja acessa o atributo pai 

const filha2 = Object.create(pai, {
    nome : {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' // writable não permite que seja sobrescrito 
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ? // ver se determinada propriedade pertence ou não ao objeto que se estar percorrendo se false quer dizer que foi algo herdado 
        console.log(key) : console.log(`Por Herança: ${key}`)
}