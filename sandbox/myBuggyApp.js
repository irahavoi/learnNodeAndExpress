/**
 * Created by irahavoi on 6/10/2015.
 */

/*
 Use node inpector for debugging:
 npm install -g node-inspector

 Starting node inspector:
 node-inspector &

 Starting node in debuf mode:
 node --debug
 or
 node --debug-brk (breaks on the 1st line)


 */
var a = 0;

function init(){
    a = 1;
}

function increment(){
    var a = a + 1; //Ugly bug!
}

init();
console.log('a before: %d', a);

increment();
console.log('a after: %d', a);
