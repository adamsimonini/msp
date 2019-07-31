import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

export function setEnvironment(app) {
    if (process.env.NODE_ENV !== 'production') {
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}

function setDevEnv(app) {
    process.env.NODE_ENV = 'development';
    // this call is to an Atlas MongoDB remote database, hosted for free on their not secure sandbox server
    // process.env.DB_URL = 'mongodb://localhost:27017/msp-dev-db';
    process.env.DB_URL = 'mongodb+srv://adam:mybestpassword@msp-dev-0hsq5.azure.mongodb.net/test?retryWrites=true&w=majority';
    process.env.TOKEN_SECRET = 'my-development-secret';
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(cors());
}

function setProdEnv(app) {
    // process.env.DB_URL = 'mongodb://localhost:27017/msp-prod-db';
    // this call is to an Atlas MongoDB remote database, hosted for free on their not secure sandbox server
    process.env.DB_URL = 'mongodb+srv://adam:mybestpassword@msp-dev-0hsq5.azure.mongodb.net/test?retryWrites=true&w=majority';
    process.env.TOKEN_SECRET = 'my-production-secret';
    app.use(bodyParser.json());
    // app.use(express.static(__dirname + '/../dist'))
    app.use(express.static(__dirname + '/../../dist'))
}