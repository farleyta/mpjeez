//================================== routes for API ====================================

var express = require('express');

module.exports = (function() {
	'use strict';

	var api = express.Router();

	// test route to make sure everything is working (accessed at GET http://localhost:8080/)
	api.get('/', function(req, res) {
		res.json({ message: 'MPJeez API.' });   
	});
	

	/**
	 * Routes for Entries API
	 */
	require('./entries')(api);

	

	return api;

})();