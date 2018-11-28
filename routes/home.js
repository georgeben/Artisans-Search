const express = require('express');
const router = express.Router();
const Artisan  = require('../models/artisan-model');

router.get('/', (req, res) =>{

    Artisan.find({}, (err, result) =>{
        if(err){
            console.log("Ohh shhiiit! An error", err.message);
            res.send("Something bad happened");
        }else{
            console.log(result)
            res.render("home", {
                count: result.length,
                results: result
            });
        }
    })

    //Dummy data just to populate the page
    let results = [
        {
            name:"Taslim Oseni",
            occupation:"Panel beater",
            location:"Lekki Phase 1",
            phonenumber:"0801234562"
        },
        {
            name:"George Benjamin",
            occupation:"Electrician",
            location:"Lekki Phase 1",
            phonenumber:"0801234562"
        }, 
        {
            name:"Somto Onyekwere",
            occupation:"Vulcanizer",
            location:"Lekki Phase 1",
            phonenumber:"0801234562"
        }, 
        {
            name:"Daniel Damilere",
            occupation:"Tailor",
            location:"Lekki Phase 1",
            phonenumber:"0801234562"
        },
        {
            name:"Rasheed David",
            occupation:"Plumber",
            location:"Lekki Phase 1",
            phonenumber:"0801234562"
        },
        {
            name:"Buhari Jonah",
            occupation:"Nothing",
            location:"Lekki Phase 1",
            phonenumber:"0801234562"
        }
    ];
});

module.exports = router;