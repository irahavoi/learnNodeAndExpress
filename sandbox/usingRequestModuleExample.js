/**
 * Created by irahavoi on 6/10/2015.
 */
var request = require('request');

request('http://localhost:8989', function(err, response,body){
   if(err){
       console.log('Error: ', err.message);
       throw err
   } else{
       console.log('Body: ', body);
   }
});
