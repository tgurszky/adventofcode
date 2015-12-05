var crypto = require('crypto');

var secret = 'yzbqklnj';
var hash;
var i = -1;

do {
    var md5sum = crypto.createHash('md5');
    md5sum.update(secret + ++i);
    hash = md5sum.digest('hex');
} while(!hash.startsWith('00000'));

console.log(i + ' ' + hash);
