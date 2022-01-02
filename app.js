// require('dotenv').config()
import * as dotenv from 'dotenv'
dotenv.config()

// const server = require('./application/server');
import server from './application/server.js'

server.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT}`)
})