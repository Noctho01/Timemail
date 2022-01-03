import cookieParser from "cookie-parser"    // dependencia cookie-parser para atribuir acesso aos cookies por meio do express

export default (app, express) => {
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
    app.use(cookieParser())
}