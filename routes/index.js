const router = require('express').Router();

const { validateInputsToCreateUser, validateInputsToLogin } = require('../middlewares/validators');
const { createUser, login } = require('../controllers/users');

const auth = require('../middlewares/auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');

const { NotFoundError } = require('../errors/index');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.post('/signup', validateInputsToCreateUser, createUser);
router.post('/signin', validateInputsToLogin, login);

router.use(auth);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

router.use(auth, usersRouter);
router.use(auth, moviesRouter);

router.use('*', auth, () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

module.exports = router;
