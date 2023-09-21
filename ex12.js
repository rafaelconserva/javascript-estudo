/* Você recebeu uma task de criar um cadastro clientes, Crie uma função que receba como parâmetro o nome, email e cpf do cliente.

a) - Caso o argumento passado como nome não seja informado, a mensagem “O nome do cliente deve ser informado”;

b) - Sua função deve utilizar outra função de validação de email (procure na internet função pronta de validação de email  e utilize-a) e caso o parâmetro de email não seja válido, a mensagem “E-mail inválido” deve ser exibida;

c) - Além da validação do e-mail, o parâmetro do CPF deve ser validado (procure na internet uma função pronta para validar CPF e utilize-a) também, caso o argumento passado como CPF não seja válido, a mensagem “CPF inválido deve ser exibida”;

d) - Não deve ser permitido o cadastro em duplicidade de email e cpf, logo, verifique se o email e cpf já não estão cadastrados.*/


//Lista de clientes cadastrados
const clientesCadastrados = [];

// Validando email através do regex (Re)
function validarEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
//Validando cpf através do geradordecpf.com
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Elimina CPFs invalidos conhecidos	
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    // Valida 1o digito	
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Valida 2o digito	
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}

//Cadastrar um cliente
function cadastrarCliente(nome, email, cpf) {
    if (!nome) {
        return "O nome do cliente deve ser informado";
    }
    if (!validarEmail(email)) {
        return "E-mail inválido";
    }
    if (!validarCPF(cpf)) {
        return "CPF inválido";
    }
    if (clientesCadastrados.some((cliente) => cliente.email === email)) {
        return "E-mail já cadastrado";
    }
    if (clientesCadastrados.some((cliente) => cliente.cpf === cpf)) {
        return "CPF já cadastrado";
    }

    // Caso todas as validações passem, realiza o cadastro
    const novoCliente = { nome, email, cpf };
    clientesCadastrados.push(novoCliente);
    return "Cliente cadastrado com sucesso";
}

// Exemplos de uso:
console.log(cadastrarCliente("João", "joao@email.com", "123.456.789-09"));
console.log(cadastrarCliente("", "invalido", "987.654.321-09"));
console.log(cadastrarCliente("Maria", "maria@email.com", "987.654.321-09"));
