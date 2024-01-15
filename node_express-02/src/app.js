const express = require("express")
const rotaVeiculos = require('./veiculos/rotas')
const app = express()
app.use(express.json())

const middlewareAutorizacao = (request, response, next) => {
    const headers = request.headers;
    if(headers["client-id"] === "funcionarioConcessionaria" 
        && headers['client-secret'] === "abcd123"){
            return next();
    }
    response.status(401).send({
        mensagem: "Usuario não autorizado!!!"
    })
}

app.use('/veiculos', middlewareAutorizacao, rotaVeiculos);

app.get('/healthcheck', (req, response) => {
    response.send();
});

const porta = 3001;
app.listen(porta, () => console.log(`http://localhost:${porta}`))