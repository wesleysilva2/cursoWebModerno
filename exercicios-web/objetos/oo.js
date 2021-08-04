// CÓDIGO NÃO EXECUTÁVEL!!!

// Procedural, vc tem um techo de codigo que vc o chama e executa ele quando quiser 
// Isso da um foco muito forte na função, os valores recebidos são processados pela função
processamento(valor1, valor2, valor3)

 // OO na procedural vc tem funções que manipulam dados, ja na OO temos  
 // Dados e dentro desses dados temos funções, como pode ser visto modificado abaixo
 objeto = {
     valor1,
     valor2,
     valor3,
     processamento() {
         // ...
     }
 }

 objeto.processamento() // Foco passou a ser o objeto, antes era a opção

 /* Principios importantes:
 
 1. Abstracao - Pegar um objeto do mundo real e traduzir para o sistema, como a caneta 
    que escreve, é de cores diferentes. 

 2. Encapsulamento - É vc ter os detalhes de implementação escondido e deixar disponivel rpa quem precisar
    e deixar uma interface simples pra quem for usar, o carro vc precisa usar so o que tem no painel, volante
    e as outras coisas o que acontece ali dentro ja não compete a quem usa a interface, quando vc muda o interno
    Nem sempre quem usa a interface precisa se adaptar, porém se o externo mudar ai todo mundo vai precisar.

    É importante usar por que isso diminui o nivel de dependencia do seu codigo, quando o nivel de encapsulamento é baixo
    e o acoplamento é muito alto é ruim, o cenario contrario é o ideal, baixo acoplamento e alto encapsulamento.

 3. Herança (prototype) - Significa que vc recebe atributos e comportamentos de uma classe Pai. O pai pode ter outro
    Pai, que seria o avo e assim vai. São relações do tipo E1, o carro tem um motor, o corro tem uma porta essa porta tem parafusos
    outro exemplo de E1 o ser humano é um animal(E1) o ser humano E1 mamifero e mamifero é um animal.

    Priorise a composição ao invez da herança, pois é muito mais interessante.

 4. Polimorfismo - Siguinifica multiplas formas, por exemplo temos um celular, um celular que pode ser qualquer tipo, vc pode usar um 
    conceito generico de carro e apontar pra uma ferrarie ou um UNO, usando esse modelo generico. 

 */