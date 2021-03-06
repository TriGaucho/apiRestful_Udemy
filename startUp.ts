import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

import DataBase from './infra/dataBase'
import NewsController from './controller/newsController'
import Auth from './infra/auth'
import uploads from './infra/uploads'

class StartUp{
    public app: express.Application
    private _connectionDb: DataBase
    private bodyParser

    constructor() {
        this.app = express()

        this._connectionDb = new DataBase()
        this._connectionDb.createConnection()

        this.middler()

        this.routes()
    }

    enableCors(){
        const options: cors.CorsOptions = {
            methods: "GET, OPTIONS, PUT, POST, DELETE",
            origin: "*"
        }

        this.app.use(cors(options))
    }

    middler(){
        this.enableCors()
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended : false }))
    }

    routes(){
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1'})
        })

        // this.app.use(Auth.validade)
        this.app.route('/uploads').post(uploads.single("file"), (req, res) => {
            try {
                res.send("Arquivo enviado !")
            } catch (error) {
                console.log(error)
            }
        })
        this.app.route('/api/v1/news').get(NewsController.get)
        this.app.route('/api/v1/news/:id').get(NewsController.getById)
        this.app.route('/api/v1/news').post(NewsController.create)
        this.app.route('/api/v1/news/:id').put(NewsController.update)
        this.app.route('/api/v1/news/:id').delete(NewsController.delete)
    }
}

export default new StartUp()