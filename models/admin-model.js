const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema;


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

