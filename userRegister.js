const express = require('express');

const router = express.Router();

const pg = require('pg');

const scrypt = require('scrypt-for-humans');

const session = require('express-session');

const conString = 'postgres://postgres:grizvok5@localhost:5432/scifit';

const validator = require('email-validator');



/*

exports.createUser = function(req, res) {
	let userId = req.body.email;
    let pw = req.body.password;
	    Promise.try(function() {
        return scrypt.hash(pw);
    }).then(function(hash) {
        let myHash = hash;


        pg.connect(conString, function(err, client, done) {
            let queryText = 'INSERT INTO clients.users (user_id, password, gender) VALUES ($1, $2, $3)';
            if (err) {
                console.log('error fetching client from pool', err);
            }
            client.query(queryText, [userId, myHash, gender], function(err, result) {
                if (err) {
                    console.log('There was an error performing query', err);
                }
            });
        });
    });
}

*/

exports.registerUser = async function registerUser(user) {
 let emailStatus = await checkUserEmail(user);

 if (emailStatus) {
 	console.log('This is a valid email!');
 } else {
 	console.log('This is not a valid email!');
 }

}

function checkUserEmail(email) {
	return new Promise(resolve => {
		resolve(validator.validate(email));
	})
}


