function funcaoDaSorte(tentativa){
    let nummeroDaVez = Math.random() * (10 - 1) + 1;
    nummeroDaVez = nummeroDaVez.toFixed(0)
    if(tentativa == nummeroDaVez){
        console.log("Parabéns! O número sorteado foi o ",nummeroDaVez)
    }else{
        console.log("Que pena! O número sorteado foi o ",nummeroDaVez)
    }
}



funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1"