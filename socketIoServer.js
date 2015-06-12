/**
 * Created by irahavoi on 6/11/2015.
 */
var http = require('http');
var express = require('express'),
    app = module.exports.app = express();

var server = http.createServer(app);
var io = require('socket.io').listen(server);  //pass a http.Server instance
app.use(express.static(__dirname));
server.listen(4000);



io.sockets.on('connection', function(socket){
   socket.on('clientMessage', function(content){
       socket.emit('serverMessage', 'You said: ' + content);
       socket.broadcast.emit('serverMessage', socket.id + ' said: ' + content);
   })
});