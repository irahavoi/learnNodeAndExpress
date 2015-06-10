/**
 * Created by irahavoi on 6/10/2015.
 */
require('http').createServer(function(req,res){
    var rs = require('fs').createReadStream('test.txt');

    rs.pipe(res, {end: false}); //By default .end() is called when the file ends.

    rs.on('end', function(){
        res.write('That\'s it, folks.');
        res.end();
    })

}).listen(8008);
