const http = require('http');
const express = require('express');

const routes = require('./routes');


const app = express();
const server = http.Server(app);

app.use(routes);

server.listen(3333);