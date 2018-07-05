var bcrypt = require('bcrypt')
var User=require('../database-mongo/user.js')
var Stuff=require('../database-mongo/stuff.js')
var Suggest=require('../database-mongo/suggest.js')
var Message=require('../database-mongo/message.js')

// we didn't use utility.js but you can add on it.


exports.signupUser = function(req, res) {
    var userName = req.body['states[userName]']
    var passWord = req.body['states[passWord]']
    var Email = req.body['states[Email]']

    User.findOne({ Email: Email },function(err,found){

        if (!found ){
            var newUser = new User({
                userName: userName,
                passWord: passWord,
                Email: Email

            })
            bcrypt.hash(passWord, 10, function(err, hash) {
                newUser.passWord=hash
                newUser.save(function(err) {
                    if(err){
                        res.status(500).send(err)
                    }
                    else{
                        res.status(201).send('Thank You')
                    }
                })
            })

        }
        else{
            res.status(201).send('')
        }
    })
}

exports.signinUser = function(req, res) {
    var userName = req.body['states[userName]']
    var passWord = req.body['states[passWord]']
    User.findOne({ userName: userName },function(err,user){
        if (!user ){
            res.send(err)
        } else {
            var data='kk'
            User.comparePassword(passWord,user.passWord, function(err,match) {
                if (match) {
                    data='coreeeeect'
                    res.status(201).send(data)
                } else {
                    data=''
                    res.status(201).send(data)
                }
            })
        }
    })
}


exports.Stuffsave = function(req, res) {
    var name=req.body.name
    var select=req.body.select
    var post=req.body.post
    var newstuff = new Stuff({
        name: name,
        select: select,
        post:post
    })

    newstuff.save(function(err) {
        if(err){
            res.status(500).send(err)
        }

        else{
            res.status(201).send('its saved')
        }
    })
}

exports.deletePost= function(req, res) {
    Stuff.remove({_id:req.body.id},function(err){
        if(err){
            res.status(500).send('err')
        }
        else{
            res.status(201).send('deleted')
        }
    })
}

exports.addSuggest= function(req, res) {
    var name=req.body.name
    var type=req.body.type
    var content=req.body.content
    var newSuggestion = new Suggest({
        name: name,
        type: type,
        content:content,
        count:0
    })

    newSuggestion.save(function(err) {
        if(err){
            res.status(500).send(err)
        }

        else{
            res.status(201).send('suggection saved')
        }
    })
}

exports.showSuggest= function(req, res) {
    Suggest.find({ type:req.body.type},function(err,data){

        if(err){
            res.status(500).send(err)
        }

        else{
            res.status(201).send(data)
        }
    })
}

exports.updateLikes=function (req, res) {
    Suggest.findByIdAndUpdate({_id:req.body.id},{ count: req.body.count}, {runValidators: true}, function (err, data) {
        if (err){res.send(err)}
        res.send(data)
    }
    )
}



exports.home= function(req, res) {
    Stuff.find({},function(err,data){

        if(err){
            res.status(500).send(err)
        }

        else{
            res.status(201).send(data)
        }
    })
}
exports.message=function(req,res){
    Message.find({to:req.body.name},function(err,data){
        if(err){
            res.status(500).send(err)
        }

        else{
            res.status(201).send(data)
        }
    })
}

exports.sendMessage=function(req,res){
    var From=req.body.From
    var to=req.body.to
    var content=req.body.content
    var newMessage=new Message(
        {From:From,
            to:to,
            content:content}
    )
    newMessage.save(function(err,data){
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })

}

exports.logout = function(req, res) {
    res.send('logout')
}
