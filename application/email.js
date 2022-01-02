import cron from 'node-cron'
import nodemailer from 'nodemailer'

export default body => {
    const transport = nodemailer.createTransport({
        service: body.service,
        auth: {
            user: body.remetente,
            pass: body.psw
        }
    })

    try {    
        body.destinatarios.forEach( destinatario => {
            const endereco = destinatario.endereco
            const time = destinatario.date

            const mailOptions = {
                from : body.remetente,
                to : endereco,
                subject : body.assunto,
                text : body.texto
            }

            cron.schedule(time, () => {
                console.log('enviando email')
                transport.sendMail(mailOptions, (error, info) => {
                    if (error) { console.log(error) }
                    else { console.log(`Email sent ${info.response}`) }
                })
            })
        })

        return true

    } catch (err) {
        return { error: err }
    }
}