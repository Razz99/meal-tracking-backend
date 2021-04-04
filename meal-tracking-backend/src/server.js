import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './Routes';
var connectDB = require ('./DB/db.js');
const app = express();

app.use(bodyParser.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

const start = async () => {
    connectDB();
    await app.listen(8080);
    console.log("Listening on port 8080");
}

start();
