function checaAnoBissexto(ano){
    if(ano % 4 == 0 && ano % 100 != 0){
        console.log(true)
        return true
    }else{
        console.log(false)
        return false
    }
}

checaAnoBissexto(2020)
checaAnoBissexto(2100)
checaAnoBissexto(2322)