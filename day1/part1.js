var fs = require('fs');

fs.readFile("./input.txt", "utf8", function (err, data) {
    var floor = 0;
    for (var i in data) {
        var direction = data[i];
        if (direction == '(') {
            floor++;
        } else if(direction == ')') {
            floor--;
        }
    }
    console.log('End floor: ' + floor);
});