/* Importando dependencias deste modulo */
import express from 'express'
import rotas from './rota.js'
import config from './config.js'

/* Instanciando server express */
const app = express()

config(app, express)    // executa a configuracao de app usando midewhares de express e outras libs
rotas(app)              // executa a inicializacao das rotas HTTP

export default app