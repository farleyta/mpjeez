var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var VehicleSchema   = new Schema({
	_owner: { 
		type: Schema.Types.ObjectId, 
		ref: 'User' 
	},
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
	},
	odometer: { 
		type: Number 
	},
	updated: { 
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Vehicle', VehicleSchema);