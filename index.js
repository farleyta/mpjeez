// BASE SETUP
// =============================================================================

var express = require('express'),
	expressHandlebars = require('express-handlebars'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	merge = require('merge');

// circular dependency: http://stackoverflow.com/questions/10090414/express-how-to-pass-app-instance-to-routes-from-a-different-file
var app = module.exports = express();

var viewsDir = __dirname + '/website/views/templates';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', expressHandlebars({
	layoutsDir: viewsDir
}));
app.set('view engine', 'handlebars');
app.set('views', viewsDir);

app.use(express.static('website/public'));

app.set('port', (process.env.PORT || 5000));




// DATABASE
// =============================================================================
mongoose.connect(process.env.MONGOLAB_URI);


// ROUTES FOR OUR API
// =============================================================================
var api = require('./api/routes/api'); 				// Routes for the API
var website = require('./website/routes/website'); 	// Routes for normal web calls

// Middleware for all requests
website.use(function(req, res, next) {
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
app.use('/', website);


// START THE SERVER
// =============================================================================
app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'));
});