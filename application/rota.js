import controll from './api-module.js'

export default app => {
    app.route('/agendar_email')
        .get(controll.info)     // retorna informacoes sobre o uso do POST /agendar_email
        .post(controll.start)   // inserir dados para agendamento do envio de emails
}