/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo. */


function estaEntre(a,minimo,maximo,inclusivo = false){

    if (inclusivo === true){
        if (a >= minimo && a <= maximo){
            console.log(true)
        }else{
            console.log(false)
        }
    }else{
        if (a > minimo && a < maximo){
            console.log(true)
        }else{
            console.log(false)
        }
    }
}

estaEntre(10,10,200,true)
estaEntre(10,10,200)
estaEntre(7,10,200,true)
