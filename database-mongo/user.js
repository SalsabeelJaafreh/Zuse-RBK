var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Promise = require('bluebird');
var db = require('./config');

var user = mongoose.Schema({
  userName: { type : String, required : true, unique:true },
  passWord: { type : String, required : true, unique:true },
  Email:{ type : String, required : true, unique:true },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});



var User = mongoose.model('User', user);




User.comparePassword = function(attemptedPassword,savedPassword,callback) {
  bcrypt.compare(attemptedPassword, savedPassword, function(err, isMatch) {
    if(err){
      callback(err,null)
    }else{
      callback(null,isMatch);}

    });
}



module.exports= User;
