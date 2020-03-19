var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hotelmanagement'
,{ useNewUrlParser: true ,useUnifiedTopology: true }).then(()=>console.log("DB server connect"))
.catch(e => console.log("DB error", e));


var db = mongoose.connection;

// User Schema
var UserSchema = mongoose.Schema({
	name: {
		type: String,
		index: true
	},
	email: {
		type: String
	},
	address: {
		type: String
	},
	mobile: {
		type: String
	},
	feedback: {
		type: String
	}
});
 module.exports = mongoose.model('User', UserSchema);

