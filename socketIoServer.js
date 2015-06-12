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
       socket.broadcast.emit('serverMessage', socket.username + ' said: ' + content);
   });

    socket.on('login', function(username){
       socket.username = username;
       socket.emit('serverMessage', 'Currently logged in as ' + username);
       socket.broadcast.emit('serverMessage', username + ' has joined conversation');
    });

    socket.emit('login');
});