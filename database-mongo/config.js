var mongoose=require ("mongoose");
//var databaseConnect = 'mongodb://localhost/ReduceRuse'
//mongoose.connect("mongodb://recycle:123456789@ds151554.mlab.com:51554/recycle");
mongoose.connect("mongodb://Mohammad:recycling@ds263109.mlab.com:63109/second-hand-store");
var db = mongoose.connection;

db.on('error', function() {
	console.log('mongoose connection error');
});

db.once('open', function() {
	console.log('mongoose connected successfully');
});

module.exports = db;