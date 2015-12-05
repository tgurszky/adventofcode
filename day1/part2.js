var fs = require('fs');

fs.readFile("./input.txt", "utf8", function (err, data) {
    var floor = 0;
    for (var i in data) {        
        var direction = data[i];
        if (direction == '(') {
            floor++;
        } else if (direction == ')') {
            floor--;
        }
        if (floor < 0) {
            console.log(Number(i) + 1);
            return;
        }
        
    }
    console.log('End floor: ' + floor);
});