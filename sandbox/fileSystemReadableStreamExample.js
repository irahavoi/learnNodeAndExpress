/**
 * Created by irahavoi on 6/9/2015.
 */
var fs = require('fs');

var readableStream = fs.createReadStream('test.txt');

readableStream.on('data', function(data){
    console.log('Got this data:');
    console.log(data.toString());
});

readableStream.on('end', function(){
   console.log('the stream has ended')
});
