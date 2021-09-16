const modulaA = require('../../moduloA') // o ../é pra sair da pasta que esta e ir pra outra
console.log(modulaA.ola)


const saudacao = require('saudacao') // Pasta que eu coloquei la saudacao e chamando ela 
console.log(saudacao.ola)

const c = require('./PastaC') // Não preciso dizer index quando eu quiser o index, posso colocar so C que ele vai no index
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Tipo Mensagem de Servidor Ne!!!')
    res.end()
}).listen(8080)



