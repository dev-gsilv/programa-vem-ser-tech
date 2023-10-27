const usuarios = [
    { nome : 'Tiago', autenticado: true },
    { nome : 'Miguel', autenticado: false},
    { nome : 'Priscila', autenticado: true },
    { nome : 'Luiz', autenticado: false},
    { nome : 'Ricardo', autenticado: true },
];

function verificarUsuarioAutenticado(nomeDoUsuario) {   
    const resultado = usuarios.find(usuario => usuario.nome == nomeDoUsuario);
    return resultado;
}

console.log(verificarUsuarioAutenticado("Miguel"));