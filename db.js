var mysql =  require("mysql");



    var con = mysql.createConnection({
        host: "localhost",
        port:3306,
        user:"root",
        password: "root",
        database: "pacman",
        multipleStatements: true

    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        
          
      });

      module.exports = con;