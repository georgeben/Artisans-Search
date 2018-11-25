const express = require('express');
const router = express.Router();

const Artisan = require('../models/artisan-model')

router.get('/', ensureAuthenticated, (req, res) =>{
    res.render("dashboard");
});


function ensureAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();        
    } else {
        console.log(req.user)
        req.flash('error_msg', 'Log in to view your dashboard');
        res.redirect('/signup');
    }
}

router.get('/logout', function(req, res) {
    req.logout();

    req.flash('success_msg', 'You are logged out');
    res.redirect('/login')
})

router.post('/', (req, res) => {
    artisan = new Artisan( {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        occupation: req.body.occupation,
        phoneNumber: req.body.phonenumber,
        location: req.body.location,
    })
    Artisan.createArtisan(artisan, function(err, result) {
        if (err) throw err;
        console.log(result);
        res.send('Artisan Created')
    })
})


module.exports = router;