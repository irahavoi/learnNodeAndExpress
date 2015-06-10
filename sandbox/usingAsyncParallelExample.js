/**
 * Created by irahavoi on 6/10/2015.
 */
var async = require('async'),
    request = require('request');

function done(err, results){
    if(err){
        throw err;
    }
    console.log("results: %j", results);
}


//Chaining execution of two I/O operations using the async.series helper function:
//Passed functions will be called in parallel. If you want the calls to be done one after another, see usingAsyncSeriesExample.js
async.parallel([
    function(next){
        request.post({uri: 'http://localhost:8080', body: '4'},
            function(err, res, body){
                next(err, body && JSON.parse(body));
            })
    },

    function(next){
        request.post({uri: 'http://localhost:8080', body: '5'},
            function(err, res, body){
                next(err, body && JSON.parse(body));
            })
    }
], done);
