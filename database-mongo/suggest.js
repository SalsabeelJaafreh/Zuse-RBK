var mongoose = require('mongoose');
var db = require('./config');

var suggest = mongoose.Schema({
	name: { type : String, required : true },
	type: { type : String, required : true },
	content: { type : String, required : true },
	count:{
		 type : Number,
		 required : true,
		 min:0
	 }
});


var Suggest = mongoose.model('Suggest', suggest);



module.exports = Suggest;
