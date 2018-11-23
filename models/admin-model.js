const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost//artisan-search");

const adminSchema = new Schema({
    name: String,
    username: String,
    password: String,
})


module.exports = mongoose.model('Admin', adminSchema);
