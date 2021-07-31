function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo prigado 
    let velocidadeAtual = 0
       
    //Metodo Publico
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }


    // metodo publico 
    this.getVelocidadeAtual = function (){ // Com o this é publico ja com o let é privado 
        return velocidadeAtual
    }
}

const uno = new Carro() // criando um objeto a partir da classe Carro

uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
