/* Questão 4: Fulano da Silva Sauro é correntista do Banco do Brasil, ele mora na Rua da Lama, no estado XPTO e na cidade XYZ. O saldo da conta bancária de Fulano é de 100 reais e ele pagou a conta de água no valor de R$ 30,00, a conta de energia no valor de R$ 50,00 e fez um lanche que custou R$ 26,00. Implemente um algoritmo que representa o cenário de Fulano e exiba uma mensagem “Conseguiu pagar a conta na lanchonete” ou “Saldo insuficiente, falta R$ ?,00 para pagar a conta”*/

conta = 500.00
gastos = {
    agua: 30.00,
    energia: 50.00,
    lanchonete: 26.00
}

function somaGastos (gastos){
    total_gastos = Object.values(gastos).reduce((x, y) => x + y)
    saldo = total_gastos - conta
    if (conta > total_gastos)
        return 'conseguiu pagar'
    return 'Saldo insuficiente, falta R$ ${saldo} para pagar a conta.'
}

module.exports = somaGastos
