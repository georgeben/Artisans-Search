const express = require('express');
const router = express.Router();

const Admin = require('../models/admin-model')

router.get('/', (req, res) =>{
    res.render("signup");

});

router.post('/', (req, res) => {
    Admin.checkIfUserExists({username: req.body.username}, function(err, user) {
        if(user) {
            return res.status(200).json({
                msg: 'You already have an account!',
            })
        } else {
            admin = new Admin ({
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
            })
            Admin.createAdmin(admin, function(err, result) {
                if (err) throw err;
                console.log(result);
                return res.status(200).json({
                    msg: 'You are registere, Proceed to Login!',
                })
            })
        }
    })
})

module.exports = router;