/**
 * Created by irahavoi on 6/11/2015.
 */
var connect = require('connect');
//import middlewares:
var helloWorld = require('./hello_world');


var app = connect();

app.use(helloWorld)
app.listen(8787);
