const controll = require('./controll')

module.exports = app => {
    app.route(['/', '/home']).get(controll.timemail);
}