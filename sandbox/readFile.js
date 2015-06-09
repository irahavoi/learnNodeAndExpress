/**
 * Created by irahavoi on 6/9/2015.
 */
var fs = require('fs');

fs.readFile('test.txt', function(err, fileContent){
    if(err){
        throw err;
    } else{
        console.log('File Content:', fileContent.toString());
    }
});


fs.on('data', function(data){
    console.log('got some data from file read stream: %j', data);
});
