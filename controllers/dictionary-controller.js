const dictionary = require('../data/db')
const mysql = require("mysql");
var count = 0;

function conncectDB(){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!")
            // var sql = "SELECT * FROM entries WHERE word = " + mysql.escape(word);
    
            // con.query( sql, function (err, result) {
            //     if (err) 
            //         res.status(404).json("Word not found!");
            //     else
            //         res.status(200).json(result);
            // });
    });
    count++;
}

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "entries"
});

module.exports.getDictionaryDesc = function(req, res){
    var word = req.params.word;

    console.log("Word name : " + word);
     
    if(count == 0)
        conncectDB();

    var sql = "SELECT * FROM entries WHERE word = " + mysql.escape(word);

            con.query( sql, function (err, result) {
                if (err) 
                    res.status(404).json("Word not found!");
                else
                    res.status(200).json(result);
            });

};