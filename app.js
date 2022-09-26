require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const { errors } = require('celebrate');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { limiter } = require('./middlewares/rateLimiter');

const app = express();
const routes = require('./routes');

const { PORT, DB_PATH } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(DB_PATH, () => {
  console.log('БД успешно подключена');
});

app.use(cors());
app.use(helmet());
app.use(limiter);
app.use(requestLogger);

// app.get('/crash-test', () => {
//   setTimeout(() => {
//     throw new Error('Сервер сейчас упадёт');
//   }, 0);
// });

app.use('/', routes);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Приложение слушает порт: ${PORT}`);
});
