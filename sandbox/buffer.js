/**
 * Created by irahavoi on 6/9/2015.
 */
var buf = new Buffer('Hello Node.js World!');

var smallerBuffer = buf.slice(0,13);

var encodedStr = smallerBuffer.toString('base64');

console.log(smallerBuffer.toString());
