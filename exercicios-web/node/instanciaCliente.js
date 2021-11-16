const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica') //tanto contador A quanto o contador B compartilham do mesmo objeto

const contadorC = require('./instanciaNova')() // esse retorna uma função por isso os parenteses, pra invocar a função
const contadorD = require('./instanciaNova')()


contadorA.inc()
contadorA.inc()
console.log(contadorA.valor,contadorB.valor) // veja que o que foi feito no A afetou o B, pois a instancia é unica

contadorC.inc()
contadorC.inc()

console.log(contadorC.valor,contadorD.valor) // diferente do de instancia unica, o de nova instancia não se afetam entre si

