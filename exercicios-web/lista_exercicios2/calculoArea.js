function areaDoTriangulo(base, altura){

    let area = 0 
    area = (base * altura) / 2
    area = area.toFixed(2) // Limitando pra duas casas decimais
    console.log(area)
    return area
}

areaDoTriangulo(10, 15) // retornarĂ¡ 75.00
areaDoTriangulo(7, 9) // retornarĂ¡ 31.50
areaDoTriangulo(9.25, 13.1) // retornarĂ¡ 60.59