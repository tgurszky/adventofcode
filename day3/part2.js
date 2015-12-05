var fs = require('fs');

fs.readFile("./input.txt", "utf8", function (err, data) {
    
    var map = new Array();
    map[0] = new Array();
    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var y2 = 0;
    map[0][0] = true;
    
    for (var i in data) {
        var turn = i % 2 == 0;
        switch (data[i]) {
            case '^':
                if (turn) {
                    y1++;
                } else {
                    y2++;
                }
                break;
            case 'v':
                if (turn) {
                    y1--;
                } else {
                    y2--;
                }
                break;
            case '>':
                if (turn) {
                    x1++;
                } else {
                    x2++;
                }
                break;
            case '<':
                if (turn) {
                    x1--;
                } else {
                    x2--;
                }
                break;
        }
        var x, y;
        if (turn) {
            x = x1;
            y = y1;
        } else {
            x = x2;
            y = y2;
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