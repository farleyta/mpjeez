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
		res.json({ message: 'MPJeez Home Page.' }); 
	});

	router.get('/test', function(req, res) {
		var markup = React.renderToString(
			App({ initialCount: 7 })
		);

		res.render('index', {
			markup: markup
		});
	});

	return router;
})();