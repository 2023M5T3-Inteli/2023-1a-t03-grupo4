interface Usuario {
  email: string;
  senha: string;
}

const usuarios: Usuario[] = [
  { email: "usuario1@email.com", senha: "senha123" },
  { email: "usuario2@email.com", senha: "outraSenha" }
];

function verificarLogin(email: string, senha: string): string {
  if (email === "" || senha === "") {
    return "Email ou senha incorretos";
  }

  const usuarioEncontrado = usuarios.find((usuario) => {
    return usuario.email === email && usuario.senha === senha;
  });

  if (!usuarioEncontrado) {
    return "Conta não existente";
  }

  return "Login efetuado com sucesso";
}

console.log(verificarLogin("usuario1@email.com", "senha123")); // Login efetuado com sucesso
console.log(verificarLogin("usuario2@email.com", "senhaIncorreta")); // Email ou senha incorretos
console.log(verificarLogin("usuarioInexistente@email.com", "senha123")); // Conta não existente
console.log(verificarLogin("", "senha123")); // Email ou senha incorretos
console.log(verificarLogin("usuario1@email.com", "")); // Email ou senha incorretos