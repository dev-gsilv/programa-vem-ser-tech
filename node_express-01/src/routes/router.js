const router = require('express').Router();

// Usuarios router
const usuariosRouter = require('./usuarios');
router.use('/', usuariosRouter);

// Lojas router
const lojasRouter = require('./lojas');
router.use('/', lojasRouter);

module.exports = router;
