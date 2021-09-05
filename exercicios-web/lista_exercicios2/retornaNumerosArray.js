function filtrarNumeros(array){
    const newArray = []
    for(let i=0;i < array.length; i++){
        if(typeof array[i] === "number"){ // So printa se for um tipo numero
            newArray.push(array[i])
        }
    }
    console.log(newArray)
    return newArray
}


filtrarNumeros(["Javascript", 1, "3", "Web", 20])
filtrarNumeros(["a", "c"])