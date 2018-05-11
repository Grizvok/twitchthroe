const express = require('express');

const router = express.Router();

const pg = require('pg');

const scrypt = require('scrypt-for-humans');

const session = require('express-session');

const conString = 'postgres://postgres:grizvok5@localhost:5432/scifit';