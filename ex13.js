/*Crie 4 métodos onde cada um receba dois parâmetros e realize, respectivamente, as seguintes operações aritméticas
a) - Somar b) - Subtrair c) - Multiplicar d) - Dividir*/

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Não é possiveo dividir por zero";
    }
    return a / b;
}

module.exports={somar,dividir,subtrair,multiplicar}