/**
 * Created by irahavoi on 6/10/2015.
 */
var util = require('util');
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res){
   console.log('Got request');
   console.log('Method: ' + req.method);
   console.log('Url: ' + req.url);

   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.write('Hello World!');
   res.end('\n' + util.inspect(req.headers));
});

server.listen(8989);
