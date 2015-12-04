var rl = require('readline').createInterface({ input: require('fs').createReadStream("./input.txt") });

var result = 0;
var count = 0;

rl.on('line', function (data) {
    var first = data.indexOf('x');
    var second = data.indexOf('x', first + 1);

    var l = data.substring(0, first);
    var w = data.substring(first + 1, second);
    var h = data.substring(second + 1);
    
    var a = Number(l) * Number(w);
    var b = Number(w) * Number(h);
    var c = Number(h) * Number(l);

    var V = 2 * (a + b + c);
    
    var slack = a < b ? a < c ? a : c : b < c ? b : c;

    result = result + V + slack;

    count++;
    if (count == 1000) {
        console.log(result);
    }
    
});

