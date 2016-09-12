var express = require("express");
var app = express();

var port = process.env.PORT

app.get('/',function(req, res){
    res.send("Aloha World")
})

app.get('/routing',function(req, res){
    res.send("Aloha Routing")
})

app.listen(port, function(err){
    console.log("The server is running on port: " + port);
});