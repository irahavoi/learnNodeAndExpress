/**
 * Created by irahavoi on 6/10/2015.
 */
var test = require('tap').test;
var assert = require('assert');
var Circle = require("../public/javascripts/circle")


test('addition of 2 and 2 works', function(t){
    t.equal(2+2, 4, '2 + 2 should be 4!');
    t.end();
});

test('test circle area', function(t){
    assert(new Circle(1,1,1).area() > 0, "Area must be positive");
    t.end();
});

test('shallow and deep equality', function(t){
    var circle1 = new Circle(1,1,1);
    var circle2 = new Circle(1,1,1);
    t.equal(circle1, circle1, 'Shallow comparison checks whether variables reference the same object.');
    t.notEqual(circle1, circle2, 'Deep comparison checks object attributes.');
    t.end();
});