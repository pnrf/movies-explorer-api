const router = require('express').Router();
const { validateUserId, validateInputsToCreateMovie, validateMovieId } = require('../middlewares/validators');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');

router.get('/', validateUserId, getMovies);
router.post('/', validateInputsToCreateMovie, createMovie);
router.delete('/:movieId', validateMovieId, deleteMovie);

module.exports = router;
