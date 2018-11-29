const Admin= require('../models/admin-model'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcrypt-nodejs');


module.exports = function(passport) {
    //local strategy
    passport.use("local", new LocalStrategy({
      passReqToCallback: true
    },function(req,username,password,done){
      //match username
      let query = {username:username};
      Admin.findOne(query,function(err,admin){
        if(err) throw err;
        if(!admin){
          return done(null,false,req.flash(message,"No user found"));
        }

        //match password
        bcrypt.compare(password,admin.password, (err,isMatch)=> {
          if(err) throw err;
          if(isMatch){
            return done(null,admin);
          }else{
            return done(err,false,req.flash(message,"Invalid Password"));
          }
        });
      });
    }));
    passport.serializeUser(function(admin, done) {
      done(null, admin.id);
    });
    
    passport.deserializeUser(function(id, done) {
      Admin.findById(id, function(err, admin) {
        done(err, admin);
      });
    });
}