//================================== routes for API ====================================

var express = require('express');

module.exports = (function() {
	'use strict';

	var api = express.Router(),
		merge = require('merge'),
		Entry = require('../models/entry');

	// test route to make sure everything is working (accessed at GET http://localhost:8080/)
	api.get('/', function(req, res) {
		res.json({ message: 'MPJeez API.' });   
	});
	
	// on routes that end in /entries
	// ----------------------------------------------------
	api.route('/entries')

		// get all the entries (accessed at GET http://localhost:8080/api/entries)
		.get(function(req, res) {
			Entry.find(function(err, entries) {
				if (err)
					res.send(err);

				res.json(entries);
			});
		})

		// create an entry (accessed at /api/entries)
		.post(function(req, res) {
			
			var entry = new Entry();      // create a new instance of the Entry model
			entry.username = req.body.username;  // set the entries username (comes from the request)
			entry.vehicle.make = req.body.vehicle.make;  // set the entries vehicle.make (comes from the request)
			entry.vehicle.model = req.body.vehicle.model;  // set the entries vehicle.model (comes from the request)
			entry.vehicle.year = req.body.vehicle.year;  // set the entries vehicle.year (comes from the request)
			entry.milesOnTank = req.body.milesOnTank;  // set the entries milesOnTank (comes from the request)
			entry.gallonsAdded = req.body.gallonsAdded;  // set the entries gallonsAdded (comes from the request)
			entry.cost = req.body.cost;  // set the entries cost (comes from the request)
			entry.odometer = req.body.odometer;  // set the entries odometer (comes from the request)
			entry.notes = req.body.notes;  // set the entries notes (comes from the request)
			entry.updated = req.body.updated;  // set the entries updated (comes from the request)

			// save the entry and check for errors
			entry.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Entry created for ' + entry.username });
			});
			
		});

	// on routes that end in /entries/:entry_id
	// ----------------------------------------------------
	api.route('/entries/:entry_id')

		// get the entry with a specific ID
		.get(function(req, res) {
			Entry.findById(req.params.entry_id, function(err, entry){
				if (err)
					res.send(err);

				res.json(entry);
			});
		})

		// update a specific entry
		.put(function(req, res){
			Entry.findById(req.params.entry_id, function(err, entry){
				if (err)
					res.send(err);

				// merge any new properties with the original
				entry = merge(entry, req.body);

				entry.save(function(err){
					if (err)
						res.send(err);

					res.json({ message: "Entry updated for " + entry._id})
				});
			});
		})
		
		// delete a specific entry
		.delete(function(req, res){
			Entry.remove({
				_id: req.params.entry_id
			},
			function(err, entry){
				if (err)
					res.send(err);

				res.json({message: "Successfully deleted."});
			});
		});

	return api;

})();