const express = require('express');
const router = express.Router();
const Artisan  = require('../models/artisan-model');

router.get('/', (req, res, next) =>{

    Artisan.find({}, (err, result) =>{
        if(err){
            return next(err)
        }else{
            res.render("home", {
                count: result.length,
                results: result
            });
        }
    })
});

router.post('/', (req, res, next) =>{
    Artisan.find({
        occupation: req.body.occupation,
        location: req.body.location,
    }, (err, result) =>{
        if(err){
            return next(err);
        }
        res.render("home", {
            count:result.length,
            results:result
        })
    })
})

module.exports = router;