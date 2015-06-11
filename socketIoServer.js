/**
 * Created by irahavoi on 6/11/2015.
 */
var httpd = require('http').createServer(handler);
var io = require('socket.io').listen(httpd);
var fs = require('fs');

httpd.listen(4000);

function handler(req, res){
    fs.readFile(__dirname + '\\socketIOClient.html',
    function(err, data){
      if(err){
          res.writeHead(500);
          res.end('Error loading client page');
          throw err;
      }

      res.writeHead(200);
      res.end(data);
    })
}

io.sockets.on('connection', function(socket){
   socket.on('clientMessage', function(content){
       socket.emit('serverMessage', 'You said: ' + content);
       socket.broadcast.emit('serverMessage', socket.id + ' said: ' + content);
       console.log(content);
   })
});