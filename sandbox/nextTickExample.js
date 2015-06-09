/**
 * Created by irahavoi on 6/9/2015.
 */
var veryExpensiveComputation = function(){
    console.log('im supposed to be very expensive..')
}
//defer the execution of an action till the next pass around the event loop:
process.nextTick(function(){
    veryExpensiveComputation();
});