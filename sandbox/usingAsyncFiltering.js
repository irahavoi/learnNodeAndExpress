/**
 * Created by irahavoi on 6/11/2015.
 */
var async = require('async');
var request = require('request');

var collection = [1,2,3,4,5];

function done(result){
    console.log('The 1st element on %j whose square value ' +
    'is greater than 10: %j', collection, result)
}

function test(value){
    return value > 10;
}

function detect(item, callback){
    request.post({uri: 'http://localhost:8080', body: JSON.stringify(item)},
        function(err, res, body){
            callback(body && test(JSON.parse(body)));
        });
}

//async.detec invokes the detect function in parallel for each element,
// which means that you might not get the first item in the list that meets the criteria.
//It depends on the order in which async operations finish.
async.detect(collection, detect, done);

