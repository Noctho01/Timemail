const express = require('express')
const app = express()

require('./config')(app, express) // Configurando app
require('./rota')(app) // Chamando rotas

module.exports = app // EXPORTANDO APP