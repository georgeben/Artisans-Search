const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost//artisan-search");

const artisanSchema = new Schema({
    firstName: String,
    lastName: String,
    occupation: String,
    phoneNumber: Number,
    location: String,
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
    newArtisan.save(callback)
    /* bcrypt.hash(newArtisan.password, null, null, function(err, hash) {
        if (err) throw err;
        newArtisan.password = hash;
        newArtisan.save(callback);
    }) */
}

