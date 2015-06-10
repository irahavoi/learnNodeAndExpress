/**
 * Created by irahavoi on 6/9/2015.
 */
var fs = require('fs');

//Getting information about a file:
var fileName = 'test.txt';
fs.stat('test.txt', function(err, stats){
   if(err){
       throw err;
   }  else{
       console.log(stats);
       console.log(fileName + ' is a file: ' + stats.isFile());
       console.log(fileName + ' is a directory: ' + stats.isDirectory());
       console.log(fileName + ' is a symbolic link: ' + stats.isSymbolicLink());
       console.log(fileName + ' is fifo: ' + stats.isFIFO());
       console.log(fileName + ' is a socket: ' + stats.isSocket());
   }
});