var express = require('express');
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser');

var mware = (req, res, next) => {
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
} 

app.use(mware,bodyParser.urlencoded({extended: false}));


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

var chainmware = (req, res, next) => {
    req.time = new Date().toString();
}

var uno = (req, res, next)=>{
    req.time = new Date().toString();
    next();
}
var dos = (req, res) => {
    res.send({
        time: req.time
    });
}


app.get("/now",uno,dos);

var send2 = (req, res) => {
    res.json({
        echo: req.params.word
    })
};

app.get("/:word/echo",send2)

var send3 = (req, res) => {
    res.json({
        name: req.query.first + " " + req.query.last
    })
}

var send4 = (req, res) => {
    res.json({
        name: req.body.first + " " + req.body.last
    })
}

app.route("/name").get(send3).post(send4)

var chatlogs = (req, res) => {
    payload = req.json
    console.log(payload.payload)
    res.json(payload.payload)
}

app.route("/logs").get().post(chatlogs)


































 module.exports = app;
