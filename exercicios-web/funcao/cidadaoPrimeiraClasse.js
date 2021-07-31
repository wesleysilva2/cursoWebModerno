// Função em JS é First-classe object (Citizens)


//Criar de forma literal
function fun1(){ // Se a função não tem nada ela retorna undefined

}

// Armazenar uma função em uma variavel
const fun2 = function () {

}

// Armazenar em um array 

const array = [function(a,b) {return a + b}, fun1, fun2]

console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar função como parametro 
function run (fun){
    fun()
}

// Uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4) // como o resultado da função soma é uma função
             // Eu passo um parametro pra função de retorno