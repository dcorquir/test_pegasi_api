import express from 'express';
import routes from './../routes/routes';
import MongoDB from '../common/database/mongo';
class App {
    public server;

    constructor() {
        this.server = express();
        this.middleware();
        this.routes();
        this.mongoConnect();
    }

    middleware() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }

    mongoConnect() {
        new MongoDB();
    }
}

export default new App().server;