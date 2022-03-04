var express = require('express');
var app = express();
require('dotenv').config();

var mware = (req, res, next) => {
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
} 

app.use(mware);


var send = (req, res) => {
    absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
};
  
app.get("/", send);
  
  
app.use("/public", express.static(__dirname + "/public")); 

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE==="uppercase"){
        res.json({
            message: "Hello json".toUpperCase()
          });
    }else {
        res.json({
            message: "Hello json"
          });
    }
  });




































 module.exports = app;
