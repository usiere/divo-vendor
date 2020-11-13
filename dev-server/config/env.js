import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

/**
 * Determines the current environment and sets the appropriate variables
 * @param {Express App} app 
 */
export function setEnvironment(app) {
    if (!process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== 'production') {
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}

/**
 * Used to set development environment variables
 * @param {Express App} app 
 */
function setDevEnv(app) {
    process.env.NODE_ENV = 'development';
    app.use(bodyParser.json()); // Allows parsing JSON from the client
    app.use(morgan('dev')); // Log HTTP Requests to the node console (for debugging purposes)
    app.use(cors()); // Enable Cross Origin Requests, since Vue.JS is on a different origin
    process.env.DB_URL = 'mongodb://localhost:27017/vue2-db';
    process.env.TOKEN_SECRET = '27946982a9a4408996607fe95a6299f9';
    // Amazon s3 secret key (confirm)
    process.env.AWS_ACCESS_KEY_ID ='AKIAJ372PHUAGSIGXXYA';
    process.env.AWS_SECRET_ACCESS_KEY ='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';
    process.env.AWS_REGION =  'eu-west-2';
    process.env.AWS_BUCKET_NAME = 'divoitemsupd';
    process.env.AWS_SDK_LOAD_CONFIG = 1
}

/**
 * Used to set production environment variables
 * @param {Express App} app 
 */
function setProdEnv(app) {
    process.env.NODE_ENV = 'production';
    process.env.DB_URL = 'mongodb://user:password123@ds133642.mlab.com:33642/vue-db';
    process.env.TOKEN_SECRET = '9f4d50bfa6b2450a9ec766fc5104948e';
    app.use(bodyParser.json());
    app.use(express.static(__dirname + '/../../dist'));
     // Amazon s3 secret key (confirm)
    process.env.AWS_ACCESS_KEY_ID ='AKIAJ372PHUAGSIGXXYA';
    process.env.AWS_SECRET_ACCESS_KEY ='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';
    process.env.AWS_REGION =  'eu-west-2';
    process.env.AWS_BUCKET_NAME = 'divoitemsupd';
    process.env.AWS_SDK_LOAD_CONFIG = 1

}



