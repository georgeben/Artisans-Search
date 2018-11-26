const mongoose = require('mongoose');
const mongoDB = 'mongodb:/localhost/artisan-search';

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));



function checkLocation(querystring, db){

    const query = {location: querystring}
    db.find(query, (err, result) => {
        if(err){
            console.log(err);
        }

        console.log(result);
        return result
    })

}


function checkOccupation(querystring, db){

    const query = {occupation: querystring}
    db.find(query, (err, result) => {
        if(err){
            console.log(err);
        }

        console.log(result);
        return result
    })

}