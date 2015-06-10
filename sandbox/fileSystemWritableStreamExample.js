/**
 * Created by irahavoi on 6/9/2015.
 */
var fs = require('fs');

var writeStream = fs.createWriteStream('test.txt', {'flags' : 'a'});
writeStream.write("Last time written to this file was on " + new Date() + ' \n');