import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from './config';
import routes from './routes';

let app = express();
app.server = http.createServer(app);

//middleware

//passport config

//api routes v1
app.use('/v1',routes);

app.server.listen(config.port);
console.log('Started on port '+ app.server.address().port);

// var server = app.listen(config.port, function () {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('running at http://' + host + ':' + port)
// });

export default app;