const controll = require('./controll')

module.exports = app => {
    app.route('/init').post(controll.init)
}