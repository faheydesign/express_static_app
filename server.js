var express = require("express");
var app = express();

app.use(express.static('public'));


app.get('/', function(req, res){
  res.sendFile("/public/index.html");
  console.log("serving up index");
});


app.listen(3000);
console.log("magic happens on port 3000");
