require('dotenv').config()
const server = require('./application/server');

server.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT}`)
})