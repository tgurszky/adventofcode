﻿var rl = require('readline').createInterface({ input: require('fs').createReadStream("./input.txt") });

var lights = [];
for (var i = 0; i < 1000; i++) {
    lights[i] = [];
}

rl.on('line', function (data) {
    
    var xy1, xy2;
    var instr = -1;
    var split = data.split(' ');
    if (split.length == 4) {
        // toggle
        instr = 2;
        xy1 = split[1].split(',');
        xy2 = split[3].split(',');
    } else {
        // turn
        if (split[1] == 'on') {
            // on
            instr = 1;
        } else {
            // off
            instr = 0;
        }
        xy1 = split[2].split(',');
        xy2 = split[4].split(',');
    }
    switch (instr) {
        case 0:
            for (var x = Number(xy1[0]); x <= Number(xy2[0]); x++) {
                for (var y = Number(xy1[1]); y <= Number(xy2[1]); y++) {
                    lights[x][y] = false;
                };
            };
            break;
        case 1:
            for (var x = Number(xy1[0]); x <= Number(xy2[0]); x++) {
                for (var y = Number(xy1[1]); y <= Number(xy2[1]); y++) {
                    lights[x][y] = true;
                };
            };
            break;
        case 2:
            for (var x = Number(xy1[0]); x <= Number(xy2[0]); x++) {
                for (var y = Number(xy1[1]); y <= Number(xy2[1]); y++) {
                    if (lights[x][y] == undefined) {
                        lights[x][y] = true;
                    } else {
                        lights[x][y] = !lights[x][y];
                    } 
                }
            };
            break;
    }
});

rl.on('close', function () {
    var r2 = 0;
    for (var x = 0; x < 1000; x++) {
        for (var y = 0; y < 1000; y++) {
            if (lights[x][y]) {
                r2++;
            }
        };
    };
    console.log(r2);
});