// uma factory retorna um novo objeto ou seja, uma nova instancia

module.exports = () =>{
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}






