const a = 1
const b = 2
const c = 3

const obj1 = {a, b , c}

console.log(obj1)


const nomeAttr = 'nota'
const ValorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = ValorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: ValorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        //.....
    },
    
    funcao2(){ // Jeito reduzido de declarar 
        //....

    }
}

console.log(obj5)