import express from 'express'
import rotas from './rota.js'
import config from './config.js'

const app = express()

config(app, express)
rotas(app)

export default app