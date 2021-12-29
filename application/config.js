const cookieParser = require('cookie-parser');

module.exports = (app, express) => {
    app.engine('html', require('ejs').renderFile);
    app.set('views', './application/views');
    app.set('view engine', 'html');

    app.use(express.static('./application/public'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cookieParser());
};