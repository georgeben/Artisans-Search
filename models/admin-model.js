const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/artisan-search");

const adminSchema = new Schema({
    name: String,
    username: String,
    password: String,
})


let Admin = module.exports = mongoose.model('Admin', adminSchema);



//query e.g { email: req.body.email}
module.exports.checkIfUserExists = function(query, callback) {
    Admin.findOne(query, callback)    

}


// newAdmin would be an instance of the model eg admin = new Admin({
    // email: req,body.email .....
//})

module.exports.createAdmin = function(newAdmin, callback) {
    bcrypt.hash(newAdmin.password, null, null, function(err, hash) {
        if (err) throw err;
        newAdmin.password = hash;
        newAdmin.save(callback);
    })
}


module.exports.comparePassword = function(userPassword, hash, callback) {
    bcrypt.compare(userPassword, hash, function(err, isMatch) {
        if (err) throw err;
        callback(null, isMatch)
    })
}

