const express = require('express');
const server = express();

server.use(express.json());

// Incoming HTTP request log
server.use((req, res, next) => {
    console.log('[' + new Date().toISOString() + ']', req.method, req.url);
    next();
});

// Routes
const routes = require('./routes/router');
server.use('/', routes);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost.com:${PORT}/`);
});
