const express = require('express');
const app = express();

// app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.get('/healthcheck', (req, response) => {
    response.send('Healthcheck pass!');
});

const emailsContato = [];
app.post('/contato', (req, res) => {
    try {
        if (req.body.email != '') {
            emailsContato.push(req.body.email);
            res.sendFile(__dirname + '/public/success.html');
        } else {
            throw new Error('Falha na requisição');
        }
    } catch (err) {
        next(new Error('Falha na requisição'));
    }
});
// Handler de erro
app.use((err, req, res, next) => {
    console.log('Caiu no handler de erro!');
    res.status(503).send({
        mensagem: 'Servidor indisponível!',
    });
});
app.get('/emails', (req, res) => {
    res.send(emailsContato);
});

const porta = 3000;
app.listen(porta, () => console.log(`http://localhost:${porta}`));
