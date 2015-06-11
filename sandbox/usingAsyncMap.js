/**
 * Created by irahavoi on 6/11/2015.
 */
var async = require('async');
var request = require('request');

var collection = [1,2,3,4,5];

function done(err, result){
    if(err){
        throw err;
    }

    console.log('Result: %j', result);
}

function iterator(value, callback){
    request.post({uri: 'http://localhost:8080', body: JSON.stringify(value)},
    function(err, res, body){
        callback(err, body && JSON.parse(body))
    });
}

async.map(collection, iterator, done)