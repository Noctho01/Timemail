/* Importando e executando dependencia para uso do process.env */
import * as dotenv from 'dotenv'
dotenv.config()

/* Importando objeto app server http */
import server from './application/server.js'

server.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT}`)
})