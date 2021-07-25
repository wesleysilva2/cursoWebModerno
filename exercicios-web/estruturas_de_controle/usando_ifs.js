function soGoodNews(nota){
    if(nota >=7){
        console.log("Aprovado com " + nota)
    }
}


soGoodNews(8.1)
soGoodNews(6.1)


function seForTrueITalk(valor){
    if(valor){
        console.log("É verdade... " + valor)
    }
}

seForTrueITalk()
seForTrueITalk([])
seForTrueITalk(undefined)
seForTrueITalk(0)
seForTrueITalk(NaN)
seForTrueITalk('')


function teste1(num){
    if(num > 7)
        console.log(num)
        console.log('Final')
}

teste1(8)
teste1(6) // Ele printa por que esta sem chaves e o de baixo é executado sempre, so funciona sme chave com uma setença

