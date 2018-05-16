'use strict';

const express = require('express');
const router = express.Router();

router.post('/', function (req, res) {
	console.log(req.body.email, req.body.password);
});

module.exports = router;