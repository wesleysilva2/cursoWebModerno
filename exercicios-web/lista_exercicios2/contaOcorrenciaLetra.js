function contaCaracter(palavra,frase){
    let contaPalavras = 0
    for(let i=0;i < frase.length;i++){ 
        if(frase[i] === palavra){ // Com três iguais ele diferencia maiuscula e menuscula
            contaPalavras = contaPalavras + 1
        }
    }

    console.log(contaPalavras)
}


contaCaracter("r", "A sorte favorece os audazes") // retornará 2
contaCaracter("c", "Conhece-te a ti mesmo") // retornará 1
