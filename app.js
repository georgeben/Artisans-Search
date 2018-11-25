const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

//Routes
const homeRoute = require('./routes/home');
const signUpRoute = require('./routes/signup');
const logInRoute = require('./routes/login');
const dashboardRoute = require('./routes/dashboard');

const app = express();

//Logging
app.use(logger('dev'));

//Serving files in the public folder
app.use(express.static(path.resolve(__dirname, "public")));

//Setting up the view engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

//Route to the home page
app.use('/', homeRoute);

//Route to the sign up page
app.use('/signup', signUpRoute);

//Route to the log in page
app.use('/login', logInRoute);

//Route to the dashboard
app.use('/dashboard', dashboardRoute);

//Catch 404 errors
app.use((req, res, next) =>{
    return next(new Error("Page not found"));
})

//Error handler
/* app.use((err, req, res, next) =>{
    //Create a local context object to store the error message
    res.locals.message = err.message;
    // render the error page
    res.status(404);
    res.render('error');
}); */

//Starting the server
const server = app.listen(3000, ()=>{
    console.log(`Server started on port ${server.address().port}`);
})