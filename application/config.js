import cookieParser from "cookie-parser";

export default (app, express) => {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cookieParser());
};