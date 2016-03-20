var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();

var myArray = str.split('\n');

console.log(myArray.length-1);