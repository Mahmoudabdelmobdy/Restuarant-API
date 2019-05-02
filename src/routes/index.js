import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializaDb from '../db'
import app from '..';

let router = express();

//connect to db
initializaDb(db => {

    //internal middleware
    router.use(middleware({ config, db}));

    //api routes v1 (/v1)

});

export default router;
