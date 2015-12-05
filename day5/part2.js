var rl = require('readline').createInterface({ input: require('fs').createReadStream("./input.txt") });

var result = 0;
var naughtyStrings = ['ab', 'cd', 'pq', 'xy'];

rl.on('line', function (data) {
    if (IsNice(data)) {
        result++;
    }
});

rl.on('close', function () {
    console.log(result);
});

function IsNice(data) {
    
    var a = false;
    var b = false;
    var pairCount = {};
    for (var i in data) {
        var char = data[i];
        if (i > 0) {
            var charBefore = data[i - 1];
            if (i > 1) {
                var charBeforeBefore = data[i - 2];
                b = b || char == charBeforeBefore;
            }
            if (pairCount[charBefore + char] == undefined) {
                pairCount[charBefore + char] = i;
            } else {
                a = a || i - pairCount[charBefore + char] >= 2;                
            }
        }
    }
    return a && b;
}