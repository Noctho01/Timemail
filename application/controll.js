const validationBody = require('./validation')

module.exports = {
    init: (req, res, next) => {
        res.set('Content-Type', 'application/json')

        const body = req.body
        const responseValidation = validationBody(body)

        if(!responseValidation) res.status(400).json({
            error: "O servidor não entendeu a requisição pois está com uma sintaxe inválida",
            detalhe: 'responseValidation.error'
        })
        
        res.status(201).json({
            message: "Email enviado com sucesso!"
        })
    },

    timemail: async (req, res, next) => {
        res.set('Content-Type', 'application/json')
        let errors = {}
        const email = {
            remetente: req.body.remetente,
            assunto: req.body.assunto,
            texto: req.body.texto,
            destinatarios: req.body.destinatarios
        }

        if(!email.remetente) errors.remetente = "Campo obrigatorio"
        if(!email.assunto) errors.assunto = "Campo obrigatorio"
        if(!email.texto) errors.texto = "Campo obrigatorio"
        if(!email.destinatarios) errors.destinatarios = "Campo obrigatorio"

        if (Object.keys(errors).length != 0) {
            res.status(400).json({
                error: "Não foi possivel realizar esta operacão",
                detalhe: { errors }
            })
        } else {
            res.cookie('MamaAqui', email)
            res.status(200).json({
                message: "Operação concluida"
            })
        }
    }
};