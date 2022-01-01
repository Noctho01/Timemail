const Email = require('./email')
const validationBody = require('./validation.js')

module.exports = {
    start: (req, res, next) => {
        res.set('Content-Type', 'application/json')

        const body = req.body
        const responseValidation = validationBody(body)

        if(responseValidation.error) res.status(400).json({
            error: "O servidor não entendeu a requisição pois está com uma sintaxe inválida",
            detalhe: responseValidation.error
        })
        
        const email = new Email(body)

        res.status(201)
            .json({
                message: "Email enviado com sucesso!"
            })
    },

    stop: (req, res, next) => {
        res.set('Content-Type', 'application/json')

        res.status(201).json({
            message: "Envio cancelado"
        })
    }
};