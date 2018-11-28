const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
     Admin = require('../models/admin-model')

passport.use(new LocalStrategy({passReqToCallback:true},
    (req, username, password, done) => {
        Admin.checkIfUserExists({username: username}, (err, user) => {
            if(err) {
                return done(err, req.flash('error', "An error occured. Please try again later."))
            }
            if(!user) {
                return done(null, false, req.flash('error', "Incorrect username or password"))
            }
            Admin.comparePassword(password, user.password, function(err, isMatch) {
                if (err) {
                    return done(err, req.flash('error', "An error occured. Please try again later."))
                    //throw err;
                }
                if(isMatch) {
                    return done(null, user)
                } else {
                    return done(null, false, req.flash('error', "Incorrect username or password"))
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
