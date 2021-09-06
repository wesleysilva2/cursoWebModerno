function buscarPalavrasSemelhantes(palavra, busca){ // essa solução foi bem louca kk mas deu certo
    let contaBusca = 0
    const newArray = []
    for(let i=0;i < busca.length;i++){ 
        for(let y=0; y<busca[i].length; y++){
            if(palavra[y] == busca[i][y]){
                contaBusca = contaBusca + 1
                if(contaBusca == 3){
                    newArray.push(busca[i])
                    contaBusca = 0
                }   
            }  
        }
    }

    console.log(newArray)
}

buscarPalavrasSemelhantes("pro", ["profissional", "mobile", "programação"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []