const express = require('express');
const router = express.Router();
const pg = require('pg');
const scrypt = require('scrypt-for-humans');
const session = require('express-session');
const conString = 'postgres://postgres:grizvok5@localhost:5432/scifit';
const validator = require('validator');


router.post('/', async function(req, res) {

  let emailStatus = await checkUserEmail(req.body.email);
  let passwordStatus = await doPasswordsMatch(req.body.password, req.body.confirmpassword);
  let passwordLengthStatus = await checkPasswordLength(req.body.password);

  if (emailStatus) {
  	//res.sendStatus(200);
  } else {
  	//res.sendStatus(400);
  }

  if (passwordStatus) {
  	//res.sendStatus(200);
  } else {
  		//res.sendStatus(400);
  }

  if (passwordLengthStatus) {
  	res.sendStatus(200);
  } else {
  	  res.sendStatus(400);
  }

});

function checkUserEmail(email) {
  return new Promise(resolve => {
    resolve(validator.isEmail(email));
  });
}

function doPasswordsMatch(password, confirmpassword) {
	return new Promise(resolve => {
		resolve(validator.equals(password, confirmpassword));
	})
}

function checkPasswordLength(password) {
	return new Promise(resolve => {
		resolve(validator.isLength(password, {min:6, max:15}));
	})
}


module.exports = router;