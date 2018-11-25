const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../auth/passportSetup')(passport);

router.get('/', (req, res) =>{
    res.render("login");
});


router.post('/', passport.authenticate('local', { successRedirect: '/dashboard', failureRedirect: '/signup', failureFlash: true}));


/* router.post('/', (req, res) => {
    Admin.checkIfUserExists({ username: req.body.username}, function(err, result) {
        if (err) throw err;
        console.log(result);
        if(result) {
            Admin.comparePassword(req.body.password, result.password, function(err, isMatch) {
                if (err) throw err;
                if(isMatch) {
                    return res.status(200).json({
                        msg: "Welcome!"
                    }) 
                } else {
                    return res.status(200).json({
                        msg: "Invalid Password"
                    })
                }
            }) 
        } else {
            return res.status(200).json({
                msg: "Sad! You haven't registered yet!"
            })
        }
    })
}) */

module.exports = router;