const express = require('express');
const router = express.Router();

const Artisan = require('../models/artisan-model')

router.get('/', (req, res) =>{
    res.render("dashboard");
});

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