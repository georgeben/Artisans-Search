const express = require('express');
const router = express.Router();
const Artisan  = require('../models/artisan-model');

router.get('/', (req, res) =>{

    Artisan.find({}, (err, result) =>{
        if(err){
            console.log("Ohh shhiiit! An error", err.message);
            res.send("Something bad happened");
        }else{
            res.render("home", {
                count: result.length,
                results: result
            });
        }
    })
});

router.post('/', (req, res) =>{
    console.log("Incoming body",req.body)
    console.log(req.body.occupation, req.body.location);
    //res.send("I got your search");
    Artisan.find({
        occupation: req.body.occupation,
        location: req.body.location,
    }, (err, result) =>{
        console.log(result);
        res.render("home", {
            count:result.length,
            results:result
        })
    })
})

module.exports = router;