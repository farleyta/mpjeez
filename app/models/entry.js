var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EntrySchema   = new Schema({
	username: { 
		type: String,
		required: true
	},
	vehicle: { 
		make: { 
			type: String,
			required: true
		},
		model: { 
			type: String,
			required: true
		},
		year: { 
			type: Number,
			required: true
		}
	},
	milesOnTank: { 
		type: Number,
		required: true
	},
	gallonsAdded: {
		type: Number,
		required: true
	},
	cost: { 
		type: Number
	},
	odometer: { 
		type: Number 
	},
	notes: { 
		type: String 
	},
	updated: { 
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Entry', EntrySchema);