var mongoose=require ('mongoose')
//mongoose.connect('mongodb://localhost/ReduceRuse');
//mongoose.connect("mongodb://recycle:123456789@ds151554.mlab.com:51554/recycle");
mongoose.connect('mongodb://Mohammad:recycling@ds263109.mlab.com:63109/second-hand-store')
var db = mongoose.connection

db.on('error', function() {
})

db.once('open', function() {
})

module.exports = db
