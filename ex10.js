/* A) Implemente uma função de depositar, a qual deve incrementar o valor do saldo;
B) Implemente uma função de sacar, a qual deve subtraia o valor do saldo;
C) Implemente uma função comprar que deve adicionar o valor da compra na array compras do respectivo correntista. Obs: Implemente os testes unitários */

const correntistas = [ 
    {
        idConta: 1,
        nome: 'Rafael',
        saldo: 10,
        cartaoDeCredito:{
            limite:100,
            compras:[50,30]
        }
    },
    {
        idConta: 2,
        nome: 'Julia',
        saldo: 100,
        cartaoDeCredito:{
            limite:100,
            compras:[]
        }
    },
]
  
  function depositar(idConta, valor) {
    const correntista = correntistas.find((conta) => conta.idConta === idConta);
    if (correntista) {
      correntista.saldo += valor;
      console.log(`Depósito de R$ ${valor} realizado com sucesso para ${correntista.nome}.`);
    } else {
      console.log(`Conta com ID ${idConta} não encontrada.`);
    }
  }
  
  function sacar(idConta, valor) {
    const correntista = correntistas.find((conta) => conta.idConta === idConta);
    if (correntista) {
      if (valor <= correntista.saldo) {
        correntista.saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado com sucesso para ${correntista.nome}.`);
      } else {
        console.log(`Saldo insuficiente para realizar o saque.`);
      }
    } else {
      console.log(`Conta com ID ${idConta} não encontrada.`);
    }
  }
  
  function comprar(idConta, valor) {
    const correntista = correntistas.find((conta) => conta.idConta === idConta);
    if (correntista) {
      if (valor <= correntista.cartaoDeCredito.limite) {
        correntista.cartaoDeCredito.compras.push(valor);
        console.log(`Compra de ${valor} realizada com sucesso para ${correntista.nome}.`);
      } else {
        console.log(`Limite de crédito excedido.`);
      }
    } else {
      console.log(`Conta com ID ${idConta} não encontrada.`);
    }
  }
  

  depositar(1, 50);
  sacar(2, 80);
  comprar(1, 70);
  