/**
 * Created by irahavoi on 6/9/2015.
 */

//Using setTimeout to defer the execution of a function:
var timeout_ms = 2000; //2 seconds
var timeout = setTimeout(function(){
        console.log('timed out!');
    }, timeout_ms);

//Cancels the scheduled function:
clearTimeout(timeout); //<-- Timeout will never be called
