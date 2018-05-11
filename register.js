const express = require('express');
const router = express.Router();
const pg = require('pg');
const scrypt = require('scrypt-for-humans');
const session = require('express-session');
const conString = 'postgres://postgres:grizvok5@localhost:5432/scifit';
const validator = require('email-validator');


router.post('/', async function(req, res) {
  let emailStatus = await checkUserEmail(req.body.email);

  if (emailStatus) {
    console.log('This is a valid email');
  } else {
    console.log('This is not a valid email');
  }

});

function checkUserEmail(email) {
  return new Promise(resolve => {
    resolve(validator.validate(email));
  });
}

module.exports = router;