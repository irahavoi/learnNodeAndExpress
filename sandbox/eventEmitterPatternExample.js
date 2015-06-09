/**
 * Created by irahavoi on 6/9/2015.
 */
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var MyEmitter = function(){

}

//Sets up prototype chain so that you get the EventEmitter prototype methods available to MyEmitter instances.
util.inherits(MyEmitter, EventEmitter);

MyEmitter.prototype.sayHi = function(name){
    this.emit('speak', 'errr', 'um');
    console.log('Hi there, ' + name + '!');
};

var myInstance =  new MyEmitter();

//Will be called only once:
myInstance.once('speak', function(){
    console.log('Speaks for the first time ever!');
});

//Will be called every time 'speak' event occurs:
myInstance.on('speak', function(arg1, arg2){
    console.log('Getting ready to say something: ' + arg1 + ' ' + arg2);
});

myInstance.sayHi('Illia');
myInstance.sayHi('Nadia');
myInstance.sayHi('Sonia');

