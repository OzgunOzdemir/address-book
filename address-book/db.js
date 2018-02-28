var mongoose = require('mongoose');
mongoose.connect(
	'mongodb://127.0.0.1:27017/address-book'
	);
var Schema = mongoose.Schema({
	ad: String,
	soyad: String,
	telNo: String
});
mongoose.model('User', userSchema);
