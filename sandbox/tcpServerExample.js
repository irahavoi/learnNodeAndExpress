var server = require('net').createServer(function(socket){
    console.log('new connection!');
    var timeout = 5000; //5 seconds

    socket.setEncoding('utf8');
    socket.setTimeout(timeout);
    socket.write('Hello there. How can I help you? :) \n You have 5 seconds only, so hurry up. Type \'quit\' to exit. \n');

    socket.on('data', function(data){
        console.log('got: '. data.toString());

        if(data.trim().toLowerCase() === 'quit'){
            socket.write('See you!');
            return socket.end();
        }

        socket.write('Reading your input: ' + data.split('-').join());
    });

    socket.on('end', function(){
        console.log('Client connection ended.');
    });

    socket.on('timeout', function(){
        socket.write('idle timeout. disconnecting. Bye!');
        socket.end();
    })

}).listen(4001);