const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost//artisan-search");

const artisanSchema = new Schema({
    firstName: String,
    lastName: String,
    occupation: String,
    phoneNumber: String,
    username: Number,
})

let Artisan = module.exports = mongoose.model('Artisan', artisanSchema)

//query e.g { email: req.body.email}
module.exports.checkIfUserExists = function(query, callback) {
    Artisan.findOne(query, callback)    

}

// newAdmin would be an instance of the model eg admin = new Admin({
    // email: req,body.email .....
//})

module.exports.createArtisan= function(newArtisan, callback) {
    bcrypt.hash(newArtisan.password, null, null, function(err, hash) {
        if (err) throw err;
        newArtisan.password = hash;
        newArtisan.save(callback);
    })
}


module.exports.comparePassword = function(artisanPassword, hash, callback) {
    bcrypt.compare(artisanPassword, hash, function(err, isMatch) {
        if (err) throw err;
        callback(null, isMatch)
    })
}