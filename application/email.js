const cron = require('node-cron')
const nodemailer = require('nodemailer')

class Email {
    constructor (body) {
        this.task = Email.agendar(body)
    }

    static agendar (body) {
        const transport = nodemailer.createTransport({
            service: body.service,
            auth: {
                user: body.remetente,
                pass: body.psw
            }
        })

        body.destinatarios.forEach( destinatario => {
            const endereco = destinatario.endereco
            const time = destinatario.date

            const mailOptions = {
                from : body.remetente,
                to : endereco,
                subject : body.assunto,
                text : body.text
            }

            cron.schedule(time, () => {
                console.log('enviando email')
                transport.sendMail(mailOptions, (error, info) => {
                    if (error) { console.log(error) }
                    else { console.log(`Email sent ${info.response}`) }
                })
            })
        })
    }
}

module.exports = Email