/**
 * Created by irahavoi on 6/12/2015.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
   host: 'localhost',
   database: 'orgabot',
   user: 'testuser',
   password: 'pass' //Plain-text, ugh :)
});

var data = [1];

//You can pass a regular callback here, but it can be problematic if the result set is large, as node.js will have to buffer the whole thing into memory.
//It is more efficient to listen to 'fields' or 'result' events.
var query = connection.query('SELECT * FROM account WHERE enabled = ?', data);

query.on('error', function(err){
    throw err;
});

query.on('fields', function(fields){
   console.log('Received fields:');
   console.log(fields);
});

query.on('result', function(row){
    console.log('Received a row:');
    console.log(row);
});

connection.on('end', function(err){
   if(err){ throw err }
   console.log('That\'s it, folks');
});

connection.end();