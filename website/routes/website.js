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
		apiRequest.post({
			url: '/entries', 
			body: req.body
		}, function(apiReqErr, apiReqRes, apiReqBody){
			res.send(apiReqBody);
		});
	});

	return router;
})();