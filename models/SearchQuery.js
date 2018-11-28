const mongoose = require('mongoose');
const mongoDB = 'mongodb:/localhost/artisan-search';

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));



function checkLocation(locationQuery, occupationQuery, db){

    const lQuery = {location: locationQuery.trim()};
    const oQuery = {occupation: occupationQuery.trim()};

    
        const coll1, coll2;

        db.find(lQuery, (err, result) => {
            if(err){
                console.log(err);
            }
    
            console.log(result);
            coll1 = result;
        });

        db.find(oQuery, (err, result) => {
            if(err){
                console.log(err);
            }
    
            console.log(result);
            return result
        });

        const rawCollection = coll1.toJSON().concat(coll2.toJSON());
        return (new Backbone.Collection(rawCollection));

    }