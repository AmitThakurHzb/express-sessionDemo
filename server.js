// server.js

var express = require('express'),
app = express(),
port = process.env.PORT || 4446,

cookieParser = require('cookie-parser'),
session = require('express-session'),
path = require('path'),
morgan = require('morgan');


app.use(morgan('dev'));
//app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
	secret: "stringTxt",
	saveUninitialized: false,
	resave: true,
	cookie: { maxAge: 3000 }
}));


// Set up Routes for the application
require('./router.js')(app);

//Route not found -- Set 404
app.get('*', function(req, res) {
    res.json({
        "route": "Sorry this page does not exist!"
    });
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);