var mongoose	= require('mongoose');
var Schema 		= mongoose.Schema;
var calculate	= require('../controllers/calculate');

var User 		= require('./user');
var Vehicle 	= require('./vehicle');

var EntrySchema = new Schema({
	_user: { 
		type: Schema.Types.ObjectId, 
		ref: 'User',
		required: true
	},
	_vehicle: { 
		type: Schema.Types.ObjectId, 
		ref: 'Vehicle',
		required: true
	},
	distanceOnTank: { 
		type: Number,
		required: true
	},
	amountFuelAdded: {
		type: Number,
		required: true
	},
	cost: { 
		type: Number
	},
	date: { 
		type: Date,
		default: Date.now
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

// Function for calculating fuel economy
EntrySchema.virtual('fuelEconomy').get(function () {
	return calculate.getFuelEconomy(this.distanceOnTank, this.amountFuelAdded);
});

// Include virtuals
EntrySchema.set('toJSON', {
	virtuals: true
});

module.exports = mongoose.model('Entry', EntrySchema);