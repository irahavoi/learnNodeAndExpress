/**
 * Created by irahavoi on 6/12/2015.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
   host: 'localhost',
   database: 'orgabot',
   user: 'testuser',
   password: 'pass'
});

connection.query(
  'SELECT * FROM account',
  function(err, results, fields){
      console.log(results);
      console.log(fields);
      connection.end();
  }
);
