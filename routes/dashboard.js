const express = require('express');
const router = express.Router();

const Artisan = require('../models/artisan-model');
const Admin = require('../models/admin-model');

let adminLoggedIn = "";

router.get('/', ensureAuthenticated, (req, res, next) =>{
    if(!req.query.username){
        return next(new Error("Forbidden request"))
    }
    Admin.checkIfUserExists({username: req.query.username}, (err, admin) =>{
        adminLoggedIn = admin.name;
        res.render("dashboard", {
            name:admin.name,
            success_messages: req.flash('success_msg')
        })
    });
});


function ensureAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();        
    } else {
        console.log(req.user)
        req.flash('error', 'Log in to view your dashboard');
        res.redirect('/login');
    }
}

router.get('/logout', function(req, res) {
    req.logout();

    req.flash('success_msg', 'You are logged out');
    res.redirect('/login')
})

router.post('/', (req, res, next) => {
    artisan = new Artisan( {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        occupation: req.body.occupation,
        phoneNumber: req.body.phonenumber,
        location: req.body.location,
    })
    Artisan.createArtisan(artisan, function(err, result) {
        if (err) {
            return next(err);
        };
        console.log(result);
        req.flash('success_msg', "Artisan successfully added to the database.");

        res.render("dashboard", {
            name:adminLoggedIn,
            success_messages: req.flash('success_msg')
        });
    })
})


module.exports = router;