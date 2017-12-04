var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../model/userInfo');

router.post('/login',function(req,res,next){
  User.authenticate(req.body.username, req.body.password, function (error, user) {
        if (error || !user) {
          res.json({"status":"False"});
        } else {
          res.json({"username":user.username,"type":user.type,"status":"True"})
        }
      });
});

router.post('/', function(req, res, next) {
  if (req.body.username && req.body.password && req.body.type) {
  var userData = {
    username: req.body.username,
    password: req.body.password,
    type: req.body.type
  }
  User.create(userData, function (err, user) {
    if (err) {
      res.send('There was a problem adding info to the DB ')
    } else {
      res.send('Sign Up Done!!');
    }
  });
}

});

module.exports = router;
