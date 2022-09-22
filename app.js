require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { errors } = require('celebrate');
// const cors = require('./middlewares/cors');
// const { createUser, login } = require('./controllers/users');
// const { validateUserCreating, validateLogin } = require('./middlewares/validators');
// const routes = require('./routes');
// const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

// mongoose.connect('mongodb://localhost:27017/bitfilmsdb', {
// useNewUrlParser: true,
// useCreateIndex: true,
// useFindAndModify: false,
// });

const { PORT, DB_PATH } = process.env;

mongoose.connect(DB_PATH, () => {
  console.log('БД успешно подключена');
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

// app.use(cors);
app.use(helmet());
app.use(limiter);
app.use(requestLogger);

// app.post('/signup', validateUserCreating, createUser);
// app.post('/signin', validateLogin, login);
// app.use(auth);
// app.use(routes);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Приложение слушает порт: ${PORT}`);
});
