function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw { // Para lançar o erro vc pode colocar o que quiser 
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) { // Esse é o padrão geral pra tratar erros em JS
    try { // Tenta executar 
        console.log(obj.name.toUpperCase() + '!!!') 
    } catch (e) { // Pega caso haja erro 
        tratarErroELancar(e)
    } finally { // finaliza 
        console.log('final')
    }
}

const obj = { nome: 'Wesley' }
imprimirNomeGritado(obj) 