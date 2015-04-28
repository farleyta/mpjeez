module.exports = function(api) {

	var Entry = require('../../models/entry');

	// on routes that end in /entries	
	// ----------------------------------------------------
	api.route('/entries')

		// get all the entries (accessed at GET http://localhost:8080/api/entries)
		.get(function(req, res) {
			Entry.find(function(err, entries) {
				if (err)
					res.send(err);
				else res.json(entries);
			});
		})

		// create an entry (accessed at /api/entries)
		.post(function(req, res) {
			
			var entry = new Entry(req.body);      // create a new instance of the Entry model

			// save the entry and check for errors
			entry.save(function(err) {
				if (err)
					res.send(err);
				else
					res.json({ 
						message: 'Entry successfully created for ' + entry._user.email,
						entry: entry
					});
			});
			
		});

	// on routes that end in /entries/:entry_id
	// ----------------------------------------------------
	api.route('/entries/:entry_id')

		// get the entry with a specific ID
		.get(function(req, res) {
			Entry.findById(req.params.entry_id, function(err, entry){
				if (err)
					res.send(err)
				else res.json(entry);
			});
		})

		// update a specific entry
		.put(function(req, res){			
			Entry.findOneAndUpdate({_id: req.params.entry_id}, req.body, function(err, entry){
				if (err)
					res.send(err);
				else
					res.json({
						message: "Entry successfully updated.",
						entry: entry
					});
			});
		})
		
		// delete a specific entry
		.delete(function(req, res){
			Entry.findOneAndRemove({_id: req.params.entry_id}, function(err, entry){
				if (err)
					res.send(err);
				else
					res.json({
						message: "Entry successfully deleted.",
						entry: entry
					});
			});
		});
}