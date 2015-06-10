/**
 * Created by irahavoi on 6/10/2015.
 */
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res){
   console.log('Got request for the url: ' + req.url);
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.write('Hello World!');
   res.end();
});

server.listen(8989);
