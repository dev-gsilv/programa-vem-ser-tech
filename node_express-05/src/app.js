const express = require('express');
const crypto = require('crypto');
const uuid = require('uuid');

const app = express();
app.use(express.json());

const gerarHash = texto => {
    const hash = crypto.createHash('sha256').update(texto).digest('hex');
    return hash;
};

const banco = [
    {
        id: uuid.v1(),
        nome: 'admin',
        email: 'admin@mail.com',
        senha: gerarHash('fake_admin'),
        role: 'admin',
    },
];

app.post('/cadastro', (req, res) => {
    const body = req.body;
    const idUuid = uuid.v1();
    const senhaHash = gerarHash(body.senha);
    const usuario = {
        id: idUuid,
        nome: body.nome,
        email: body.email,
        senha: senhaHash,
        role: 'usuario',
    };
    banco.push(usuario);
    res.status(201).send('Usuário criado!');
});

app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const hash = gerarHash(senha);

    const usuarioEncontrado = banco.find(
        usuarioBanco => usuarioBanco.email === email,
    );
    if (usuarioEncontrado && usuarioEncontrado.senha == hash) {
        res.status(200).send('Usuário autenticado!');
    } else res.status(401).send('Usuário ou senha incorretos!');
});

app.get('/usuarios', (req, res) => {
    res.status(200).send(banco);
});

const porta = 3000;
app.listen(porta, () => console.log(`http://localhost:${porta}`));
