/**
 * Created by irahavoi on 6/10/2015.
 */
var net = require('net');
var server = net.createServer();
var sockets = [];

server.on('error', function(err){
    console.log('Server error: ' + err.message);
});

server.on('close', function(){
    console.log('Server closed');
});

server.on('connection', function(socket){
   console.log('got a new connection');
   sockets.push(socket);

   socket.on('data', function(data){
      console.log('got data: ', data.toString());

     sockets.forEach(function(otherSocket){
        if(otherSocket !== socket){
            otherSocket.write(data.toString());
        }
     });
   });

   socket.on('close', function(){
      console.log('connection closed');
      var index = sockets.indexOf(socket);
      sockets.splice(index, 1);
   });
});

/*setInterval(function(){
    sockets.forEach(function(socket){
       socket.write('{------------------------} \r\n');
    });
}, 5000);*/

server.listen(4001);


