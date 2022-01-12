const http = require('http');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors({}));
app.use(express.json());
app.use(routes);

const server = http.Server(app);

server.listen(3333);