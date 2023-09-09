const mediaNotas = require("../ex1")

test('Calcular a média do aluno como aprovado', () => {
    const alunoMock = {
        notas:{
            nota1: 7.0,
            nota2: 8.5,
            nota3: 7.0,
            nota4: 5.7
        }
    };
    resultado = mediaNotas(alunoMock);
    expect(resultado).toBe('aprovado')
})


test('Calcular a média do aluno como reprovado', () => {
    const alunoMock = {
        notas:{
            nota1: 7.0,
            nota2: 0.5,
            nota3: 7.0,
            nota4: 5.7
        }
    };
    resultado = mediaNotas(alunoMock);
    expect(resultado).toBe('reprovado')
})