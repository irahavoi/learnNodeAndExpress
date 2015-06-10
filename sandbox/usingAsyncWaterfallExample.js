/**
 * Created by irahavoi on 6/10/2015.
 */
var async = require('async'),
    request = require('request');

function done(err, res, body){
    if(err){
        throw err;
    }
    console.log("3^4 = %d", body);
}



//You can execute a series of functions where the execution of the next callback depends on the results of the previous one.
async.waterfall([
    function(next){
        request.post({uri: 'http://localhost:8080', body: '3'}, next);
    },

   function(res, body, next){
       request.post({uri: 'http://localhost:8080', body: body}, next);
   }

], done);
