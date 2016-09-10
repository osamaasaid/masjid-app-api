import config from 'config';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';

require('./models');

// import db from './utils/database';

import errorHandler from './middlewares/errorHandler';

import status from './routes/status';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(`${config.get('api.prefix')}`, status);

app.use(errorHandler());

module.exports = app;
