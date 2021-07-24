const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]() // Ja com o LET ele respeita a ordem dada e passa os valores da posição dada