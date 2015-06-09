/**
 * Created by irahavoi on 6/9/2015.
 */
var path = require('path');

console.log('Normalizing Paths:');
console.log(path.normalize('/foo/bar//baz/..'));

console.log('Joining Paths:')
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));


var fullName = '/foo/bar/baz/myfile.txt';

console.log('Dirname:')
console.log(path.dirname(fullName));

console.log('File name:')
console.log(path.basename(fullName));

console.log('File name without extension:')
console.log(path.basename(fullName, '.txt'));

console.log('File extension:')
console.log(path.extname(fullName));

path.exists(fullName, function(exists){
    console.log('Exists: ' + exists);
});

path.exists('test.txt', function(exists){
    console.log('test.txt exists: ' + exists);
})


