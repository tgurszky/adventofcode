var rl = require('readline').createInterface({ input: require('fs').createReadStream("./input.txt") });

var result = 0;

rl.on('line', function (data) {
    var first = data.indexOf('x');
    var second = data.indexOf('x', first + 1);
    
    var l = Number(data.substring(0, first));
    var w = Number(data.substring(first + 1, second));
    var h = Number(data.substring(second + 1));
    
    var a = l * w;
    var b = w * h;
    var c = h * l;
    
    var d = 2 * (l + w);
    var e = 2 * (l + h);
    var f = 2 * (h + w);
    
    var length = d < e ? d < f ? d : f : e < f ? e : f;
    
    var ribbon = l * w * h;
    
    result = result + length + ribbon;
});

rl.on('close', function () {
    console.log(result);
});