var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    //This calls the error handler
    //return next('err');

    //Calling another router in another js Class
    //return next('route');
    res.render('index', {
        name : "Aimal Khan"
    });
});

module.exports = router;