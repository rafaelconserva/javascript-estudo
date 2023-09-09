const idadeVoto = require("../ex3")

test('Imprimir se idade é opcional', () => {
    const votoMock = 17;
    resultado = idadeVoto(votoMock);
    expect(resultado).toBe('Voto opcional')
})

test('Impimir que não tem idade para votar', () => {
    const votoMock = 15;
    resultado = idadeVoto(votoMock);
    expect(resultado).toBe('Ainda não tem idade para votar')
})

test('Imprimir voto obrigatório', () => {
    const votoMock = 50;
    resultado = idadeVoto(votoMock);
    expect(resultado).toBe('Voto obrigatório')
})
    