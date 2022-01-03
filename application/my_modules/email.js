/* dependencias para funcionalidade deste modulo */
import cron from 'node-cron'        // agendamento de eventos
import nodemailer from 'nodemailer' // envio de email

export default body => {
    /* Dados do remetente */
    const transport = nodemailer.createTransport({
        service: body.service,
        auth: {
            user: body.remetente,
            pass: body.psw
        }
    })

    try {
        /* Inicia uma varredura pela lista *.destinatarios e usando seus itens como base de informacao para envio do email*/    
        body.destinatarios.forEach( destinatario => {
            const endereco = destinatario.endereco
            const time = destinatario.date

            const mailOptions = {
                from : body.remetente,
                to : endereco,
                subject : body.assunto,
                text : body.texto
            }

            /* Agendando evento de envio do email */
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