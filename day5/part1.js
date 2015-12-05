var rl = require('readline').createInterface({ input: require('fs').createReadStream("./input.txt") });

var result = 0;
var vowels = ['a', 'e', 'i', 'o', 'u'];
var naughtyStrings = ['ab', 'cd', 'pq', 'xy'];

rl.on('line', function (data) {
    if (IsNice(data)) {
        result++;
    }
});

rl.on('close', function () {
    console.log(result);
});

function IsNice(data){
    
    var vowelCount = 0;
    var hasDoubleLetter = false;
    var hasNaughtyString = false;
    for (var i in data) {
        var char = data[i];
        if (vowels.indexOf(char) != -1) {
            vowelCount++;
        }
        if (i > 0) {
            var charBefore = data[i - 1];
            hasDoubleLetter = hasDoubleLetter || charBefore == char;
            hasNaughtyString = hasNaughtyString || naughtyStrings.indexOf(charBefore + char) != -1;
        }
    }
    return vowelCount >= 3 && hasDoubleLetter && !hasNaughtyString;
}