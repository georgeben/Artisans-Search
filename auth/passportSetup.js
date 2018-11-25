const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
     Admin = require('../models/admin-model')

passport.use(new LocalStrategy(
    function(username, password, done) {
        Admin.checkIfUserExists({username: username}, function(err, user) {
            if(err) throw err;
            if(!user) {
                return done(null, false, { message: 'Unknown User'})
            }
            Admin.comparePassword(password, user.password, function(err, isMatch) {
                if (err) throw err;
                if(isMatch) {
                    return done(null, user)
                } else {
                    return done(null, false, {message: 'Invalid Password'})
                }
            })
        }); 
    }
));

module.exports = function() {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
      
    passport.deserializeUser(function(id, done) {
        Admin.findById(id, function(err, user) {
            done(err, user);
        });
    });
}
