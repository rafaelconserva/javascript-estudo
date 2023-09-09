const categoriaAtleta = require("../ex2")

test('Imprimir categoria Infantil A',()=>{
    const idadeMock= 5
    resultado = categoriaAtleta(idadeMock)
    expect(resultado).toBe('Infantil A')
})

test('Imprimir categoria Infantil B',()=>{
    const idadeMock= 8
    resultado = categoriaAtleta(idadeMock)
    expect(resultado).toBe('Infantil B')
})

test('Imprimir categoria Juvenil A',()=>{
    const idadeMock= 11
    resultado = categoriaAtleta(idadeMock)
    expect(resultado).toBe('Juvenil A')
})

test('Imprimir categoria Juvenil B',()=>{
    const idadeMock= 14
    resultado = categoriaAtleta(idadeMock)
    expect(resultado).toBe('Juvenil B')
})

test('Imprimir categoria Adulto',()=>{
    const idadeMock= 18
    resultado = categoriaAtleta(idadeMock)
    expect(resultado).toBe('Adulto')
})

test('Imprimir que não tem categoria ',()=>{
    const idadeMock= 3
    resultado = categoriaAtleta(idadeMock)
    expect(resultado).toBe('O atleta deve ter 5 anos ou mais para competir')
})

