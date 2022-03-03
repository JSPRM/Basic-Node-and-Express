var express = require('express');
var app = express();

var send = (req, res) => {
    absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
};
  
app.get("/", send);
  
  
app.use("/public", express.static(__dirname + "/public")); 

app.use("/assests/css", express.static(__dirname + "/assets/css"));


































 module.exports = app;
