const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{

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

    res.render("home", {
        count: results.length,
        results: results
    });
});

module.exports = router;