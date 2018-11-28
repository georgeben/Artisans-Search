const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const artisanSchema = new Schema({
    firstName: String,
    lastName: String,
    occupation: String,
    phoneNumber: Number,
    location: String,
})

let Artisan = module.exports = mongoose.model('Artisan', artisanSchema)

//query e.g { email: req.body.email}
module.exports.checkIfUserExists = (query, callback) => {
    Artisan.findOne(query, callback)    

}

module.exports.createArtisan= (newArtisan, callback) => {
    newArtisan.save(callback)
}

