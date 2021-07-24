const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]() // Como Var é global ele passa 10 e não respeita a ordem passada
            // É um problema pq vc não consegue acessar os valores nas posições do array 