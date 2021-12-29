const express = require('express');
const app = express();

// CONFIGURANDO APP
require('./config')(app, express);

// INICIANDO ROTA
require('./rota')(app);

// EXPORTANDO APP
module.exports = app;