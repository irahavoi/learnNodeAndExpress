/**
 * Created by irahavoi on 6/10/2015.
 */
var async = require('async');
var request = require('request');

function done(err, results){
    if(err){
        throw err;
    }

    console.log('results: %j', results);
}

var maximumConcurrency = 5;

function worker(task, callback){
    request.post(
        {
            uri: 'http://localhost:8080',
            body : JSON.stringify(task)
        }, function(err, res, body){
            callback(err, body && JSON.parse(body));
        });
}

//The order of calling callbacks is not quaranteed.
var queue = async.queue(worker, maximumConcurrency);

//Limit the number of concurrent requests:
queue.concurrency = 5;


[1,2,3,4,5,6,7,8,9,10].forEach(function(i){
   queue.push(i, function(err, result){
       if(err){
           throw err;
       }

       console.log(i + '^2 = %d', result);
   })
});