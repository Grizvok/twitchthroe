const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
	res.render('home', {
	});
});

router.post('/login', function(req, res) {
	console.log(req.body.email, req.body.password);
});

//router.post('/register', function(req, res) {
	//console.log(req.body.email);
	//userRegister.registerUser(req.body.email);
//});

module.exports = router;