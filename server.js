
var fs = require('fs');
var db = require('./db');

var cors = require('cors');
var path = require('path');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');



var port = 3000;
var connection;

app.listen(port, ()=> {
//    connection = db();
//    connection.connect();
    console.log(`connection on port: ${port}`) 

});

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/',(request,response) => {
    response.sendfile(path.resolve(('./index.html')));
});

app.get('/game',(request,response) => {
    response.sendfile(path.resolve(('./game.html')));
});


app.get('/score',(request,response) => {
    response.sendfile(path.resolve(('./score.html')));
});

