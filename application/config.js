const cookieParser = require('cookie-parser');

module.exports = (app, express) => {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cookieParser());
};