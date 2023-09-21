/* Dado uma função que tem a finalidade que retorna as funcionalidades que o usuário tem permissão de acessar. Implemente essa função na qual ao receber o seguinte parâmetro {usuario_id: 1, perfil: “ADMINISTRADOR”} ou {usuario_id: 2, perfil: “NORMAL”}

a) - Se o perfil é igual ADMINISTRADOR então deve retornar uma array de funcionalidades [“LISTAR”,”CADASTRAR”,”VISUALIZAR”,”ALTERAR”,”EXCLUIR”];

b) - Se o perfil é igual NORMAL então deve retornar uma array de funcionalidades [“LISTAR”,”VISUALIZAR”] */

function obterFuncionalidades(usuario) {
    if (usuario.perfil === "ADMINISTRADOR") {
      return ["LISTAR", "CADASTRAR", "VISUALIZAR", "ALTERAR", "EXCLUIR"];
    } else if (usuario.perfil === "NORMAL") {
      return ["LISTAR", "VISUALIZAR"];
    }
  }
  
  // Exemplos de uso:
  const usuario1 = { usuario_id: 1, perfil: "ADMINISTRADOR" };
  const usuario2 = { usuario_id: 2, perfil: "NORMAL" };
  
  const funcionalidadesUsuario1 = obterFuncionalidades(usuario1);
  const funcionalidadesUsuario2 = obterFuncionalidades(usuario2);
  
  console.log("Funcionalidades do usuário 1:", funcionalidadesUsuario1);
  console.log("Funcionalidades do usuário 2:", funcionalidadesUsuario2);
  