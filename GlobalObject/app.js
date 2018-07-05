var express = require("express");

var myRouter = require("./myRouter");

var app = express();

//My Global Variable
var myGlobalObject = "Aimal Khan";

app.use(function(req, res, next){
    //This will pass this particular global object on EACH REQUEST
    req.myGlobalObject = myGlobalObject;
    next();
});

//Step # 5 - Routers
app.use("/myRouter", myRouter);

app.listen(3000, () => {
    console.log("Running!");
});