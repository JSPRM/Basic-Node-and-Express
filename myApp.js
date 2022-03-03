var express = require('express');
var app = express();

var send = (req, res) => {
    absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
};
  
app.get("/", send);
  
  
app.use("/public", express.static(__dirname + "/public")); 

app.use("/views/css", express.static(__dirname + "/views/css"));
app.use("/views/images", express.static(__dirname + "/views/images"));
app.use("/views/fonts", express.static(__dirname + "/views/fonts"));
app.use("/views/js", express.static(__dirname + "/views/js"));





































 module.exports = app;
