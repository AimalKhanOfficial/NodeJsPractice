///////////////////////////////////
//This app was coded step by step//
//////////  Aimal Khan  ///////////
///////////////////////////////////

//1st step - Install and Resolve
var express = require('express');

//2nd step - Initialize
var app = express();

//3rd step - configs
app.set('view engine', 'ejs');

//4th step - middleware
app.use(express.json());
app.use(express.static(__dirname + '/static'));

//5th step - routes
var users = require('./routes/users');
app.use('/users/', users);
//This will be called when we call next('route') from the above JS file
var dummy = require('./routes/dummy');
app.use('/users/', dummy);

//6th Step - Error Handlers
//This will be called when any route method calls 'next(anyVar)'
//Whatever param we pass inside the next() method, will be recieved by the 'err' variable
app.use((err, req, res, next) => {
    console.log("Error Caught!" + err);
})

//7th step - boot app
app.listen(3000, () => {
    console.log("Started!");
});