var http = require('http');
var util = require('util'); 
//var JSON = require('json');
 
var server = http.createServer();
server.on('request',function(req,res)
{
res.writeHead(200, {'Content-Type':'text/plain'});
res.write(req.method);
console.log(JSON.stringify(req.headers));
res.end(util.inspect(req.headers));
});
server.listen(8004);