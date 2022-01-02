import controll from './controll.js'

export default app => {
    app.route('/agendar_email')
        .get(controll.info)
        .post(controll.start)
}