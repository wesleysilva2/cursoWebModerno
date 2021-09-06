function contarPalavras(palavras){
    let contaPalavras = 0
    for(let i=0;i < palavras.length;i++){ // length também serve pra percorrer uma string ou saber quantas letras tme nela 
        if(palavras[i] == " "){
            contaPalavras = contaPalavras + 1
        }
    }
    contaPalavras = contaPalavras + 1 // sempre tem 1 espaço a menos em relação as palavras
    console.log(contaPalavras)
}


contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5