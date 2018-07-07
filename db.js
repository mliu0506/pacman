var mysql =  require("mysql");

function login(){

    var connection = mysql.createConnection({
        host: "localhost",
        port:3000,
        user:"root",
        password: "root",
        database: "hat_pro",
        multipleStatements: true

    });

   
};

module.exports = {
    login:login();
};