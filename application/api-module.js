import enviarEmail from './my_modules/email.js'
import validationBody from './my_modules/validation.js'

export default {
    info: (req, res, next) => {
        try {
            const info = {
                "remetente" : "remetenteEmail@mail.com",
                "service" : "gmail por exemplo",
                "psw" : "suaSenha123",
                "psw_confirmation" : "suaSenha123",
                "assunto" : "foo",
                "texto" : "bar",
                "destinatarios" : [
                    {
                        "endereco" : "destinatarioEmail@mailcom",
                        "date" : "* * * * * *" // * por default é o valor atual do seu relogio/calendario
                    }
                ]
            }

            res.status(200)
                .set('Content-Type', 'application/json')
                .json({
                    "exemplo formulario json para POST /agendar_email": info,
                    "sobre date" : {
                        detalhe: "em date cada * representa um registro segundos, minutos, horas, dia, mes, dia_da_semna(ex: sunday) nessa respectiva ordem",
                        exemplo: " 'date' : '0 30 12 5 1 monday' "
                    }
                })

        } catch (err) {
            res.status(500)
                .set('Content-Type', 'application/json')
                .json({
                    error: "Erro na rota GET /agendar_email",
                    detalhe: err
                })
        }
    },

    start: (req, res, next) => {
        try {
            res.set('Content-Type', 'application/json')

            const body = req.body
            const responseValidation = validationBody(body)

            if (responseValidation.error) res.status(400).json({
                error: "O servidor não entendeu a requisição pois está com uma sintaxe inválida",
                detalhe: responseValidation.error
            })
            
            const resultSent = enviarEmail(body)
            if(resultSent.error) res.status(402).json({
                error: "Erro ao agendar o envio de email",
                detalhe: resultSent.error
            })

            res.status(201).json({ message: "Email enviado com sucesso!" })
            
        } catch (err) {
            res.status(500).set('Content-Type', 'application/json').json({
                error: "Erro na rota POST /agendar_email",
                detalhes: err
            })
            next(err)
        }
    } 
}