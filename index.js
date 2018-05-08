const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const expressSession = require('express-session');




app.engine('.hbs', exphbs({
    defaultLayout: 'home',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'views')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(express.static(path.join(__dirname, '/public')));
app.use(expressSession({secret: 'grizvok',
			saveUninitialized: true,
			resave: false
		       }));
app.use(require('./router'));


	
app.listen(8000);