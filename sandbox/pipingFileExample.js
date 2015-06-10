/**
 * Created by irahavoi on 6/10/2015.
 */
var fs = require('fs');

require('http').createServer(function(req, res){
    console.log('Request');
    res.writeHead(200, {'Content-Type': 'audio/mpeg3'});
    var rs = fs.createReadStream('files/song.mp3');

    rs.pipe(res);
}).listen(4000);
