'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const express = require('express');
const router = express.Router();
const pg = require('pg');
const scrypt = require('scrypt-for-humans');
const session = require('express-session');
const conString = 'postgres://postgres:grizvok5@localhost:5432/scifit';
const validator = require('validator');

router.post('/', (() => {
  var _ref = _asyncToGenerator(function* (req, res) {

    let emailStatus = yield checkUserEmail(req.body.email);
    let passwordStatus = yield doPasswordsMatch(req.body.password, req.body.confirmpassword);
    let passwordLengthStatus = yield checkPasswordLength(req.body.password);

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

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

function checkUserEmail(email) {
  return new Promise(resolve => {
    resolve(validator.isEmail(email));
  });
}

function doPasswordsMatch(password, confirmpassword) {
  return new Promise(resolve => {
    resolve(validator.equals(password, confirmpassword));
  });
}

function checkPasswordLength(password) {
  return new Promise(resolve => {
    resolve(validator.isLength(password, { min: 6, max: 15 }));
  });
}

module.exports = router;
