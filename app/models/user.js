var mongoose     	= require('mongoose');
var Schema       	= mongoose.Schema;

var UserSchema   = new Schema({
	email: { 
		type: String,
		index: true,
		required: true,
		unique: true
	},
	firstname: { 
		type: String
	},
	lastname: { 
		type: String
	},
	vehicles: [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Vehicle' 
	}],
	updated: { 
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', UserSchema);