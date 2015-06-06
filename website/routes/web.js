//================================== routes for index and partials================================
var express = require('express'),
	router = express.Router(),
	React = require('react');

	require("node-jsx").install({
		harmony: true,
		extension: ".jsx"
	});

module.exports = (function() {

	var App = React.createFactory(require("../components/app"));

	router.get('/', function(req, res) {
		var markup = React.renderToString(
			App()
		);

		res.render('index', {
			markup: markup
		});
	});

	router.post('/', function(req, res){
		console.log(req.body);

		res.send("data received: " + JSON.stringify(req.body));
	});

	return router;
})();