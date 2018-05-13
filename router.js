const express = require('express');

const router = express.Router();

const home = require('./home');

const register = require('./register');

const login = require('./login');


router.use('/', home);
router.use('/register', register);
router.use('/login', login);

module.exports = router;