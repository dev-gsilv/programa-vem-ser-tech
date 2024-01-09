const express = require('express');
const server = express();

server.use(express.json());
let lojas = [];
let idNovo = 0;

server.post('/lojas', (req, res) => {
    const loja = req.body;
    loja.id = idNovo++;
    lojas.push(loja);
    console.log('Loja criada com sucesso. ID:', loja.id);
    return res.status(201).json({ id: loja.id });
});
server.get('/lojas', (req, res) => {
    console.log(lojas.length, ' lojas cadastradas.');
    return res.status(200).json(lojas);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
