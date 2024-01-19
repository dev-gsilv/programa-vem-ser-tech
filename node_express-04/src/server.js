const express = require('express');
const multer = require('multer');
const crypto = require('crypto');

const app = express();

app.use(express.json());
//app.use(express.static(__dirname + '/public'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now());
    },
});
const upload = multer({
    storage: storage,
});

app.get('/healthcheck', (req, response) => {
    response.send('Healthcheck pass!');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const itens = [];

app.post('/cadastro-itens', upload.single('foto'), (req, res) => {
    try {
        if (req.body.nome != '') {
            const id = crypto.randomUUID();
            const item = { id, ...req.body, foto: req.file };
            itens.push(item);
            res.send(item.id);
        } else {
            res.status(400).send('Erro no formulário!');
        }
    } catch (err) {
        console.error(err);
    }
});

app.get('/infos/:id', (req, res) => {
    const id = req.params.id;
    const item = itens.find(item => item.id == id);
    if (item) {
        res.send(item);
    } else {
        res.status(204).send();
    }
});

app.get('/fotos-item', (req, res) => {
    const id = req.query.id;
    const item = itens.find(item => item.id == id);
    if (item) {
        res.sendFile(__dirname + '/uploads/' + item.foto.originalname);
    } else {
        res.status(204).send();
    }
});
const porta = 3000;
app.listen(porta, () => console.log(`http://localhost:${porta}`));
