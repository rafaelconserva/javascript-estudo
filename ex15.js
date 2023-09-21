/*você possui o nome de usuário da conta do instagram que você deseja acessar, mas não tem a senha, porém, você conhece algumas características que obteve através de engenharia social, e acredita que a senha seja uma dessas palavras “chocolateQuente viajar amoviajar 123456 alterarsenha”.
a) Desenvolva uma função que receba como parâmetro esse texto inteiro e verifique se a senha do usuário que é amoviajar está contida nessas palavras; Caso sim, a mensagem “Você acessou a conta!”;'*/


const palavrasChave = ["chocolateQuente", "viajar", "amoviajar", "123456", "alterarsenha"]
function verificarSenha() {
    if (palavrasChave.includes("amoviajar")) {
        return "Acesso liberado!";
    } else {
        return "Senha não encontrada.";
    }
}

module.exports = verificarSenha;
