var http = require('http');
var fs = require('fs');
var json = fs.readFileSync('js/current.json');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'}); 
    res.end(json);
}).listen(9615);