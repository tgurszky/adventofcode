var crypto = require('crypto');
var Stopwatch = require("node-stopwatch").Stopwatch;

var stopwatch = Stopwatch.create();
var secret = 'yzbqklnj';
var hash;
var i = -1;

stopwatch.start();
do {
    var md5sum = crypto.createHash('md5');
    md5sum.update(secret + ++i);
    hash = md5sum.digest('hex');
} while(!hash.startsWith('000000'));
stopwatch.stop();

console.log('Elapsed time (ms): ' + stopwatch.elapsedMilliseconds);
console.log(i + ' ' + hash + ' ');
