// node faz cache dos modulos 
// esse aqui tera ua instancia unica singleton, pois o node faz cache dos modulos
module.exports = {
    valor: 1,
    inc(){
        this.valor++
    }
}