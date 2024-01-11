const express = require('express');
const server = express();

server.use(express.json());
let lojas = [];
let idNovo = 0;

server.post(
    '/lojas',
    (req, res, next) => {
        console.log('POST(/lojas) recebido', new Date());
        next();
    },
    (req, res, next) => {
        if (req.body && Object.keys(req.body).length > 0) {
            next();
        } else {
            return res.status(400).send({ erro: 'req.body inválido!' });
        }
    },
    (req, res, next) => {
        const loja = req.body;
        loja.id = idNovo++;
        lojas.push(loja);
        res.status(201).send({ id: loja.id });
        next();
    },
    (req, res, next) => {
        console.log('Loja criada com sucesso.', new Date());
    },
);
server.get('/lojas', (req, res, next) => {
    console.log(lojas.length, ' lojas cadastradas.');
    return res.status(200).json(lojas);
});
server.delete(
    `/lojas/:tipo(restaurante|mercado|distribuidora)/:id`,
    (req, res) => {
        const params = req.params;
        if (
            lojas.some(loja => loja.id == params.id && loja.tipo == params.tipo)
        ) {
            lojas.splice(
                lojas.findIndex(
                    loja => loja.id == params.id && loja.tipo == params.tipo,
                ),
                1,
            );
            console.log('Loja removida. ID:', params.id);
            return res.status(204).send();
        }
        console.log('Nenhuma loja removida com o ID:', params.id);
        return res.status(404).send('msg: Nenhuma loja removida.');
    },
);

const PORT = 3000;
server.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
