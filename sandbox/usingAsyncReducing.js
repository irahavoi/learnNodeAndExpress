/**
 * Created by irahavoi on 6/11/2015.
 */

//Plain js Reduce approach:
var collection = [1,2,3,4,5];

function iterator(sum, elem){
    return sum + Math.pow(elem, 2);
}

//Reduce takes an initial value - 0 in this case and an iterator function and feeds it to this function.
var sum = collection.reduce(iterator, 0);

console.log('Non-async Result. Squares sum of %j is: %d', collection, sum);

//Async approach:
var async = require('async');
var request = require('request');

function done(err, result){
    if(err){
        throw err;
    }

    console.log('Async-result: The sum of the squares of %j is %d', collection, result);
}

function aIterator(memo, item, callback){
    request.post({uri: 'http://localhost:8080', body: JSON.stringify(item)},
        function(err, res, body){
            callback(err, body && (memo + JSON.parse(body)));
        });
}

async.reduce(collection, 0, aIterator, done);