const express = require('express');
const router = express.Router();
const veiculos = [];

router.get('/', (request, response, next) => {
    response.send(veiculos);
});

router.post(
    '/',
    (req, res, next) => {
        if (['fiat', 'ford', 'volvo'].includes(req.body.marca)) {
            const id = veiculos.length + 1;
            veiculos.push({
                ...req.body,
                id,
            });
            res.status(201).send({
                id,
            });
        } else next();
    },
    (req, res, next) => {
        res.status(400).send('Marca de veículo não encontrada!');
    },
);

module.exports = router;
