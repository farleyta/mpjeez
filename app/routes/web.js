//================================== routes for index and partials================================

var express = require('express');

module.exports = (function() {
	'use strict';

	var router = express.Router();

	// test route to make sure everything is working (accessed at GET http://localhost:8080/)
	router.get('/', function(req, res) {
		res.json({ message: 'MPJeez Home Page.' });   
	});

	return router;
})();