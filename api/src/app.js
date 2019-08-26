import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser'
import logger from 'morgan';
import cors from 'cors';
import sequelize from './db/sequelize';

import * as errorControler from './controllers/error';
import indexRouter from './routes/index';
import userRouter from './routes/user';
import keywordRouter from './routes/keyword';
import authRouter from './routes/auth';

const app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/user',userRouter);
app.use('/keyword',keywordRouter);
app.use('/auth',authRouter);

app.use(errorControler.get404);

sequelize.sync().then((user) => {
    console.log('create',user);
})


export default app;
