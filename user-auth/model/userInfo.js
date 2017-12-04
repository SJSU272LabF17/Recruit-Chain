var mongoose = require('mongoose');
var bcrypt = require('bcrypt'),
	SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  }
},
{collection: 'userInfo'});

UserSchema.pre('save', function (next) {
	var user = this;
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if (err) return next(err);

		bcrypt.hash(user.password, salt, function (err, hash) {
			if(err) return next(err);

			user.password = hash;
			next();
		});
	});
});

UserSchema.statics.authenticate = function (username, password, callback) {
   User.findOne({ username: username })
     .exec(function (err, user) {
       if (err) {
         return callback(err)
       } else if (!user) {
         var err = new Error('User not found.');
         err.status = 401;
         return callback(err);
       }
       bcrypt.compare(password, user.password, function (err, result) {
         if (result === true) {
           return callback(null, user);
         } else {
           return callback();
         }
       })
     });
 }


var User = mongoose.model('User', UserSchema);
module.exports = User;
