// BASE SETUP
// =============================================================================

var express = require('express'),
	expressHandlebars = require('express-handlebars'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	merge = require('merge');

var app = express();
var viewsDir = __dirname + '/app/views/templates';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', expressHandlebars({
	layoutsDir: viewsDir
}));
app.set('view engine', 'handlebars');
app.set('views', viewsDir);

app.use(express.static('public'));

app.set('port', (process.env.PORT || 5000));




// DATABASE
// =============================================================================
mongoose.connect(process.env.MONGOLAB_URI);


// ROUTES FOR OUR API
// =============================================================================
var api = require('./app/routes/api/api'); 		// Routes for the API
var router = require('./app/routes/web'); 	// Routes for normal web calls

// Middleware for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Do some middleware stuff here.');
	next(); // make sure we go to the next routes and don't stop here
});
// Middleware for all requests
api.use(function(req, res, next) {
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