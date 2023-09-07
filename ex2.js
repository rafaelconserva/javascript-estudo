/*Questão 2: Implemente um algoritmo que dada a idade de um nadador classifica-o em uma das seguintes categorias e imprima-a na tela:
infantil A = 5 - 7 anos
infantil B = 8-10 anos
juvenil A = 11-13 anos
juvenil B = 14-17 anos
adulto = maiores de 18 anos 

idade = 14

if (idade >= 5 && idade <= 7) {
    console.log('Infantil A')
}
else if (idade >= 8 && idade <= 10) {
    console.log('Infantil B')
}
else if (idade >= 11 && idade <= 13) {
    console.log('Juvenil A')
}
else if (idade >= 14 && idade <= 17) {
    console.log('Juvenil B')
}
else if (idade <= 4) {
    console.log('O atleta deve ter 5 anos ou mais para competir')
}
else { console.log('Adulto') };*/

function categoriaAtleta(idade) {
    if (idade >= 5 && idade <= 7)
        return 'Infantil A'
    else if (idade >= 8 && idade <= 10)
        return 'Infantil B'
    else if (idade >= 11 && idade <= 13) 
        return'Juvenil A'
    else if (idade >= 14 && idade <= 17) 
        return'Juvenil B'
    else if (idade <= 4 )
        return'O atleta deve ter 5 anos ou mais para competir'
    return 'Adulto'
}
module.exports = categoriaAtleta 
