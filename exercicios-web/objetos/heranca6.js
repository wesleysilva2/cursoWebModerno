function Aula(nome, videoID) { // função construtora 
    this.nome = nome
    this.videoID = videoID

}

const aula1 = new Aula('Bem Vindo', 123) // instanciando objetos com o new não so um objeto é criado,  
const aula2 = new Aula('Até Breve', 456) // como também o prototipo vai apontar pra a função, Aula.prototype nesse caso
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {} // criou um objeto novo 
    obj.__proto__ = f.prototype // associei o prototipo desse objeto ao prototipo da função que passei, o que rola no NEW
    f.apply(obj, params)// chamo função .aply que executa a função f passando o obje e parametros 
    return obj // e retorno os objetos criados 
}

const aula3 = novo(Aula, 'Bem Vindo', 123) // Criando os objetos a partir do Novo
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)