const somaGastos = require("../ex4")

test('Calcular se consegue pagar o valor', () => {
    const alunoMock = {
        gastos: {
            agua: 30.00,
            energia: 50.00,
            lanchonete: 26.00
        }
    };
    resultado = somaGastos(alunoMock);
    expect(resultado).toBe('conseguiu pagar')
})
