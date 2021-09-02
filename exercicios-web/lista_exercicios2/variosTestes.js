/*Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ... */


function inverso(a){

    if(a === true){

        console.log(false)

    }else if (a === false){

        console.log(true)

    }else if (isNaN(a)){
        console.log("booleano ou número esperados, mas o parâmetro é do tipo string")
        
    }else{
        console.log(a * -1) // Se for positivo ou negativo vai inverter 
    }
}

inverso(true)
inverso(254)
inverso(-172)
inverso('Natal é bom demais')