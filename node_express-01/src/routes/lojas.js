const express = require('express');
const lojasRouter = express.Router();

let lojas = [];
let idNovo = 0;

lojasRouter.post(
    '/lojas',
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
);
lojasRouter.get('/lojas', (req, res) => {
    res.status(200).json(lojas);
});
lojasRouter.delete(
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
            return res.status(204).send();
        } else {
            return res
                .status(404)
                .send(`Nenhuma loja encontrada com o ID: ${params.id}`);
        }
    },
);

module.exports = lojasRouter;
