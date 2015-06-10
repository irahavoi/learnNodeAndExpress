/**
 * Created by irahavoi on 6/10/2015.
 */
var http = require('follow-redirects').http;

var options = {
    host:'localhost',
    port: 8989,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
}

http.get(options, function(res){
    res.setEncoding('utf8');
   console.log('Got response: ' + res.statusCode);

    res.on('data', function(chunk){
        console.log('BODY: ' + chunk);
    })
});

