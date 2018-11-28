const express = require('express');
const router = express.Router();
const passport = require('passport');
const url = require('url');
require('../auth/passportSetup')(passport);

router.get('/', (req, res) =>{
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