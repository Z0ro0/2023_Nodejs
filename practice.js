const http = require('http');

const port = 3000;

const server = http.createServer(function(req, res){
    res.statusCode=200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");
});

server.listen(port, function(){
    console.log(`listen ${port}`);
});