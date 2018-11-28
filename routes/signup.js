const express = require('express');
const router = express.Router();

const Admin = require('../models/admin-model')

router.get('/', (req, res) =>{
    res.render("signup");

});

router.post('/', (req, res) => {
    Admin.checkIfUserExists({username: req.body.username}, function(err, user) {
        if(user) {
            req.flash('error_msg', 'The username is already taken.');
            res.redirect('/signup');
        } else {
            admin = new Admin ({
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
            })
            Admin.createAdmin(admin, function(err, result) {
                if (err) throw err;
                console.log(result);
                req.flash('success_msg', 'You are registered!');
                res.redirect('/login');
            })
        }
    })
})

module.exports = router;