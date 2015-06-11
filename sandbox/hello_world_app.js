/**
 * Created by irahavoi on 6/11/2015.
 */
var connect = require('connect');
var serveStatic = require('serve-static');

//import middlewares:
var helloWorld = require('./hello_world');
var reply = require('./replyText');



var app = connect();

var serve = serveStatic('public', {'index': false});

//Basic routing using connect:
app.use('/hello', helloWorld);
app.use('/wassap', reply('What\'s up!'));
app.use('p',serve);

app.use('/test', function(req,res,next){
    res.end('testing');
});

app.listen(8787);
