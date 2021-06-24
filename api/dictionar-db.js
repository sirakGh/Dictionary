const mysql = require("mysql");
var connected = false;

function connect(){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!")
    });
    connected = true;
}

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "entries"
});

exports.getDictionaryDesc = function(word, res){     
    var output = null;
    if(!connected)
        connect();

    var sql = "SELECT * FROM entries WHERE word = " + mysql.escape(word);

            con.query( sql, function (err, result) {
                if (err) 
                    throw err;
                else{
                    console.log("Data from DB: ");
                    res.writeHead(200,{"Content-Type":"application/json"});
                    res.end(JSON.stringify(result));
                }

            });
        return output;
};