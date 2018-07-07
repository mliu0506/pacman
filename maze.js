var fs = require('fs');

//Global Variables
var globalMap = []

//Map Object
var map = {
    cols: 20,
    rows: 11,
    tileSize: 220,
    getTile: function(row, col){
        return globalMap[row][col];
    }
}

//Functions
readMap =()=>{
    fs.readFile('./map.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        //console.log(data);
        var t1 = data.split("\r\n");
        //console.log(t1);
        
        for (var i=0; i<t1.length; i++){
            var row = t1[i].split(',');
            //console.log(row);
            globalMap.push(row);
        }
        //console.log(globalMap[1][5]);
        console.log(JSON.stringify(globalMap, null, 2));
    });
}

//TEST CODE
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
readMap();
