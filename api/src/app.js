import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser'
import logger from 'morgan';

import indexRouter from './routes/index';
import userRouter from './routes/user';
import keywordRouter from './routes/keyword';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/user',userRouter);
app.use('/keyword',keywordRouter);


export default app;
