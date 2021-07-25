const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // imprime até 5 e sai quando o break é ativado, ele sai do FOR também n so do if
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue // O continue ele interrope a repetição corrente e vai pra proxima ele não impreme o 5 
    }
    console.log(`${y} = ${nums[y]}`)
}

paraEsse: for (a in nums) { // NÃO USAR ESSA ATROCIDADE NÃO EM, DEIXA MUITO CONFUSO
    for (b in nums) {
        if(a == 2 && b == 3) break paraEsse // esse break foi rotulado para agir em cima do laço externo e não no interno
        console.log(`Par = ${a},${b}`)
    }
}