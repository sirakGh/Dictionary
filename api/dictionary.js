var http = require('http');
var url = require('url');

var dict = require('./dictionar-db');

http.createServer(function(req, res){
    console.log("Server created");
    
    var q = url.parse(req.url, true);
    var word = q.query.word;
    console.log(word);
    
    if(q.pathname == "/word"){
        console.log("inside /word")
        dict.getDictionaryDesc(word, res);
        // console.log(data);
    //     res.writeHead(200,{"Content-Type":"application/json"});
    //     console.log(typeof(data));
    //     res.write(data);
    }

}).listen(3000);