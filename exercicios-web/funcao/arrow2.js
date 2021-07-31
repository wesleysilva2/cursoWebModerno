function Pessoa(){ 
    this.idade = 0


    setInterval(() =>{ // com o Arrow o this não varia de acordo com quem ta chamando
        this.idade++
        console.log(this.idade)
    }, 1000) 
} 

new Pessoa