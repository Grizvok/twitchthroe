const express = require('express');

const router = express.Router();

const home = require('./home');

const register = require('./register');


router.use('/', home);
router.use('/register', register);

module.exports = router;