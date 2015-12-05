var fs = require('fs');

fs.readFile("./input.txt", "utf8", function (err, data) {

    var map = new Array();
    map[0] = new Array();
    var x = 0;
    var y = 0;
    map[x][y] = true;

    for (var i in data) {
        switch (data[i]) {
            case '^':
                y++;
                break;
            case 'v':
                y--;
                break;
            case '>':
                x++;
                break;
            case '<':
                x--;
                break;
        }
        if (map[x] == undefined) {
            map[x] = new Array();
        }
        map[x][y] = true;
    }
    
    var count = 0;
    for (var i in map) {
        for (var j in map[i]) {
            if (map[i][j]) {
                count++;
            }
        }
    }

    console.log(count);
});