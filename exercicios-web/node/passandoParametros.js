// passando o parametro pra um modulo, se um modulo ele retorna uma função vc pode invocar ela passand oos parametros e o que tiver neel sera executado 

module.exports = function(...nomes){
    return nomes.map(nome => `Boa semana ${nome}!!`)
}







