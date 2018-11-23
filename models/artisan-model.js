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

module.exports = mongoose.model('Artisan', artisanSchema)