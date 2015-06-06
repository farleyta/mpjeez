//================================== routes for index and partials================================
var React = require('react'),
	express = require('express'),
	router = express.Router(),
	app = require('../../index'),
	request = require('request');

	require("node-jsx").install({
		harmony: true,
		extension: ".jsx"
	});

module.exports = (function() {

	var App = React.createFactory(require("../components/app"));

	// Set default values for API requests
	var apiRequest = request.defaults({
		baseUrl: 'http://localhost:' + app.get('port') + '/api',
		json: true
	});

	router.get('/', function(req, res) {
		var markup = React.renderToString(
			App()
		);

		res.render('index', {
			markup: markup
		});
	});

	router.post('/', function(req, res){

		// Take form submission data and post it to the API
		apiRequest.post({
			url: '/entries', 
			body: req.body
		}, function(apiReqErr, apiReqRes, apiReqBody){
			// respond to the client with response from API (for now)
			res.send(apiReqBody);
		});
	});

	return router;
})();