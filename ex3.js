/* Questão 3: Implemente um algoritmo que receba a idade de 
uma pessoa e apresente na tela se ela ainda não tem idade
para votar, se ela é obrigada a votar e se o voto dela é opcional. */

function idadeVoto (idade){
    if (idade >=16 && idade <=17 || idade >= 70)
        return'Voto opcional'
    else if(idade < 16)
        return 'Ainda não tem idade para votar'
    return 'Voto obrigatório'
}
module.exports = idadeVoto
