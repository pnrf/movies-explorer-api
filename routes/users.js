const router = require('express').Router();
const { validateUserId, validateInputsToUpdateProfile } = require('../middlewares/validators');
const { getCurrentUser, updateUserProfile } = require('../controllers/users');

router.get('/me', validateUserId, getCurrentUser);
router.patch('/me', validateInputsToUpdateProfile, updateUserProfile);

module.exports = router;
