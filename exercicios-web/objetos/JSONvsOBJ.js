//JSON é um formato de dados, é o mais utilizado hoje para interoperabilidade entre sistemas
//Quer dizer que serve para comunicação de sistemas que são feitos em tecnologias diferentes, ele é textual
// Memos sistemas que são feitos da mesma linguagem podem se comunicar usando JSON

const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c}}

console.log(JSON.stringify(obj))// ele é um formato textual então não mostra as funções

//console.log(JSON.parse("{a: 1, b: 2, c:3}"))

console.log(JSON.parse('{"a": 1, "b": 2, "c":3}')) // Um objeto gerado a partir de um JSON

console.log(JSON.parse('{"a": 1.5, "b": "string", "c":true, "d": {}, "e": []}')) // Todos os atributos são delimitados por aspas duplas
