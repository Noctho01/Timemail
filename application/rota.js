const controll = require('./controll')

module.exports = app => {
    app.route('/email')
        .post(controll.start)
        .put(controll.stop)
}