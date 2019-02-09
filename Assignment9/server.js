const http = require('http');
var fs = require('fs');
var path = require("path");

function getMimeType(url){
    var dotoffset = url.lastIndexOf('.'); 
      var mimetype = dotoffset == -1 
          ? 'text/plain' 
          : { 
           '.html' : 'text/html', 
           '.ico' : 'image/x-icon', 
           '.jpg' : 'image/jpeg', 
           '.png' : 'image/png', 
           '.gif' : 'image/gif', 
           '.css' : 'text/css', 
           '.js' : 'text/javascript' ,
           '.svg' : 'image/svg+xml'
           }[ url.substr(dotoffset) ]; 
      return mimetype;
}

var index = fs.readFileSync('index.html');
// console.log(index.length);
// var style = fs.readFileSync('css/style.css');
// console.log(style.length);
// var bootstrap = fs.readFileSync('css/bootstrap-grid.min.css');
// console.log(bootstrap.length);
// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {  
    let mimeType = getMimeType(req.url);
    if (req.url === '/index.html'){
        res.writeHead(200, {"Content-Type": 'text/html'}); 
        res.write(index); 
        res.end();
    }
    else if (req.url === '/hello'){
        console.log('Hello!');
        res.writeHead(200, {"Content-Type": 'text/plain'}); 
        res.write('Hello, World!'); 
        res.end();
    }
    else if (req.url === '/favicon.ico' 
    || req.url === '/css/bootstrap-grid.min.map'
    || req.url === '/css/bootstrap-grid.min.css.map'){
        console.log('Ignore URL: ' + req.url);
        // app.get('/favicon.ico', (req, res) => res.status(204));
        //res.status(204);
        res.end();
    }
    else{
        console.log('Request: ' + req.url);
        let data = fs.readFileSync(path.resolve(__dirname) + req.url);
        res.writeHead(200, {"Content-Type": mimeType}); 
        res.write(data); 
        res.end();
    }
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');  
console.log('Node server running on port 3000');