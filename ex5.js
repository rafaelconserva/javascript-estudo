/*Questão 5: Dimitri e Monique foram à feira, cada um comprou e colocou na sua respectiva sacola as frutas que mais gostava. Na sacola de Dimitri tinha: 12 bananas que ele comprou por R$ 2,50; 1 abacaxi que custou 2,78; 5 maçãs que custou 6,94. Já na sacola de Monique tinha 10 bananas que custaram R$ 2,00; 6 tomates que foi R$ 5,00, 2 abacaxi R$ 5,00 e 10 morangos que custaram R$10,00. Implemente um algoritmo que mostre quanto cada um gastou.

Ainda sobre a questão anterior, Dimitri e Monique colocaram as suas sacolas em um único carrinho de compras. Desenvolva um algoritmo que junte as duas sacolas no carrinho, imprima na tela cada um dos produtos contidos no carrinho da seguinte forma Produto: ? Preço: R$ ? Quantidade: ?. E no final apresente o total a ser pago e a quantidade de frutas adicionadas. Obs: Implemente os testes unitários
*/

var dimitriSacola = [
  { fruta: "banana", preco: 2.5, quantidade: 12 },
  { fruta: "abacaxi", preco: 2.78, quantidade: 1 },
  { fruta: "maçã", preco: 6.94, quantidade: 5 }
];

var moniqueSacola = [
  { fruta: "banana", preco: 2.0, quantidade: 10 },
  { fruta: "tomate", preco: 5.0, quantidade: 6 },
  { fruta: "abacaxi", preco: 5.0, quantidade: 2 },
  { fruta: "morango", preco: 10.0, quantidade: 10 }
];

totalDimitri = 0;
totalMonique = 0;

dimitriSacola.forEach(produto => {
  totalDimitri += produto.preco * produto.quantidade;
});

moniqueSacola.forEach(produto => {
  totalMonique += produto.preco * produto.quantidade;
});

console.log("Dimitri gastou R$ " + totalDimitri.toFixed(2));
console.log("Monique gastou R$ " + totalMonique.toFixed(2));
