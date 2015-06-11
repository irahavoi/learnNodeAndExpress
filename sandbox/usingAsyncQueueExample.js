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

//Limit the number of concurrent requests:
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

//Queue emits events regarding it's state. You can know when it has reached the maximum concurrency limit:
//in this case further tasks will have to wait to start. Use 'saturated' property for this:
queue.saturated = function(){
    console.log('queue is saturated!')
};

//You can also track when the queue processes it's last item:
queue.empty(function(){
    console.log('Queue says: I\'m empty!');
});

queue.drain(function(){
    console.log('Queue says: I\'m drained!');
});



[1,2,3,4,5,6,7,8,9,10].forEach(function(i){
   queue.push(i, function(err, result){
       if(err){
           throw err;
       }

       console.log(i + '^2 = %d', result);
   })
});