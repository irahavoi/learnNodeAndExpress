var server = require('net').createServer(function(socket){
    console.log('new connection!');

    socket.setEncoding('utf8');
    socket.write('Hello there. How can I help you? :) Type \'quit\' to exit. \n');

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

}).listen(4001);