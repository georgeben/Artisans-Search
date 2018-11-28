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
module.exports.checkIfUserExists = (query, callback) => {
    Admin.findOne(query, callback)    

}

module.exports.createAdmin = (newAdmin, callback) => {
    bcrypt.hash(newAdmin.password, null, null, (err, hash) => {
        if (err) throw err;
        newAdmin.password = hash;
        newAdmin.save(callback);
    })
}


module.exports.comparePassword = (userPassword, hash, callback) => {
    bcrypt.compare(userPassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch)
    })
}

