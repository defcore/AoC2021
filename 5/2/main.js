var array = require('fs').readFileSync('../input.txt').toString().split("\n").map(String);

var lines = {};

function addPoint(x, y) {
    const startPoint = x + ',' + y;
    if (!lines.hasOwnProperty(startPoint))
        lines[startPoint] = 1;
    else
        lines[startPoint] = lines[startPoint] + 1;
}

function drawLine(start, end) {
    const x1 = Number(start[0]);
    const y1 = Number(start[1]);

    const x2 = Number(end[0]);
    const y2 = Number(end[1]);

    if (x1 === x2 || y1 === y2) {
        if (x1 < x2) {
            for (var i = x1; i <= x2; i++) {
                addPoint(i, y1)
            }
        } else if (y1 < y2) {
            for (var i = y1; i <= y2; i++) {
                addPoint(x1, i)
            }
        } else if (x1 > x2) {
            for (var i = x2; i <= x1; i++) {
                addPoint(i, y1)
            }
        } else if (y1 > y2) {
            for (var i = y2; i <= y1; i++) {
                addPoint(x1, i)
            }
        }
    } else {
        if (x1 < x2 && y1 < y2) {
            var temp = y1
            for (var i = x1; i <= x2; i++) {
                addPoint(i, temp)
                temp += 1
            }
        } else if (x1 > x2 && y1 > y2) {
            var temp = y2
            for (var i = x2; i <= x1; i++) {
                addPoint(i, temp)
                temp += 1
            }
        }

        else if (x1 > x2 && y1 < y2) {
            var temp = y1
            for (var i = x1; i >= x2; i--) {
                addPoint(i, temp)
                temp += 1
            }
        } else if (x1 < x2 && y1 > y2) {
            var temp = x1
            for (var i = y1; i >= y2; i--) {
                addPoint(temp, i)
                temp += 1
            }
        }
    }
}

for (var i = 0; i < array.length; i++) {
    var tmp = array[i].split(' -> ');
    var startPoint = tmp[0].split(',')
    var endPoint = tmp[1].split(',')

    // console.log(startPoint, endPoint)
    drawLine(startPoint, endPoint)
}

// console.log(lines);

var count = 0;
for (var key in lines) {
    if (lines[key] > 1)
        count++;
}

console.log(count);