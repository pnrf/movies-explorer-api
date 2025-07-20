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

const { PORT = 3001, DB_PATH = 'mongodb://localhost:27017/moviesdb' } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(DB_PATH, () => {
  console.log('БД успешно подключена');
});

app.use(cors());
app.use(helmet());
app.use(requestLogger);
app.use(limiter);

app.use('/', routes);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Приложение слушает порт: ${PORT}`);
});
