var fs = require('fs');
var db = require('./db');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = 3000; //could use 8080, 5000, these are open ports
var connection;

app.use(bodyParser.json());

app.get('/', (request, response)=>{
    response.json(JSON.stringify(readMap()));
})

app.listen(port, ()=> {
    console.log(`Connected on port: ${port}`);
    connection = db.login();
    connection.connect();
});

//Global Variables
//var globalMap = []

//Functions
readMap =()=>{
    fs.readFile('./map.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        //console.log(data);
        var t1 = data.split("\r\n");
        //console.log(t1);
        
        var t2 =[]
        for (var i=0; i<t1.length; i++){
            var row = t1[i].split(',');
            //console.log(row);
            //globalMap.push(row);
            t2.push(row);
        }
        //console.log(globalMap[1][5]);
        //console.log(JSON.stringify(globalMap, null, 2));
        return t2;
    });
}

//TEST CODE
//Map Object
var map = {
    cols: 20,
    rows: 11,
    tileSize: 220,
    getTile: function(row, col){
        return globalMap[row][col];
    }
}

renderMap =()=>{
    //Function to render map
    console.log(map.getTile(1,0));
    for(var y=0; y<map.rows; y++){
        var test = ""
        for(var x=0; x<map.cols; x++){
            var tile = map.getTile(y,x);
            if(tile!=0){
                test = test + 'II';
            }
            else{
                test = test + '  ';
            }
        }
        console.log(test)
    }
}

//Main
//readMap();
