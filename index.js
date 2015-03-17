// BASE SETUP
// =============================================================================

var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	merge = require('merge');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));
// app.use(express.static(__dirname + '/public'));


// DATABASE
// =============================================================================
mongoose.connect('mongodb://' + process.env.MONGOLAB_URI + '/heroku_app34898694');


// ROUTES FOR OUR API
// =============================================================================
var api = require('./app/routes/api'); 		// Routes for the API
var router = require('./app/routes/web'); 	// Routes for normal web calls

// Middleware for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Do some middleware stuff here.');
	next(); // make sure we go to the next routes and don't stop here
});

// REGISTER OUR ROUTES -------------------------------
app.use('/api', api);
app.use('/', router);


// START THE SERVER
// =============================================================================
app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'));
});