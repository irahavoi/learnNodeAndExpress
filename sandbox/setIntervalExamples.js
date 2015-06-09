/**
 * Created by irahavoi on 6/9/2015.
 */
var period = 5000;
var stopMe = setInterval(function(){
    console.log('tick-tack');
}, period);

//Unscheduling the scheduling handler:
clearInterval(stopMe);
