const express = require('express');
const router = express.Router();
const passport = require('passport');
const url = require('url');
require('../auth/passportSetup')(passport);

router.get('/', (req, res) =>{
    console.log(req.flash('error_msg'));
    console.log(req.flash('error'))
    res.render("login");
});


router.post('/', passport.authenticate('local', {failureRedirect: '/login', failureFlash: true}), 
            (req, res) =>{
                res.redirect(url.format({
                    pathname:"/dashboard",
                    query:{
                        username:req.body.username
                    }
                }))
            });

module.exports = router;