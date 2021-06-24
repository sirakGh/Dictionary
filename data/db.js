
const mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "entries"
});

exports.dictionary = con;


//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Result: " + result);
//     });
//   });
// con.connect(function(err) {
//   if (err) throw err;
//  // con.query("SELECT * FROM customers where name like 'V%'", function (err, result, fields) {
//     //con.query("SELECT name,address FROM customers ", function (err, result, fields) {
//       con.query("SELECT *FROM entries ", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });