var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;


/* Check if db connection is not available */
db.on('error', function(error){
  console.log(error);
});

/* Check if db connection is available */
db.once('open',function(){
  console.log('Connection Established');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
