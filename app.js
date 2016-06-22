
var express = require("express");
var app= express();
var fs = require("fs");

var multer = require("multer");
var upload = multer({dest:'uploads/'});

app.post("/",upload.single('user-file'),function(req,res){
    res.writeHead(200, {'content-type':'application/json'});
    res.end(JSON.stringify(
            {
                'Name':req.file.originalname,
                'Size':req.file.size
            }
        ));
});

app.get("/",function(req,res){
    fs.readFile("index.html",function(err,data){
        if (err) {
            console.error(err);
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data.toString());
        }
    });
});

app.listen(process.env.PORT || 3000);