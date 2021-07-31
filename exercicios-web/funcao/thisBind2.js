function Pessoa(){ // Isso para ensinar como driblar o this que varia 
    this.idade = 0

    const self = this // a instancia atual que esta no codigo, assim o sefl sempre vai apontar pra pessoa
    setInterval(function(){//Ela despara uma outra função a partir de um intervalo determinado por vc
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000) // 1000 milisegundos, ou seja a cada 1 segundo 
}   //poderia fazer com o bind também

new Pessoa // Criando objeto pessoa 