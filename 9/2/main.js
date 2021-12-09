var array = require('fs').readFileSync('../input.txt').toString().split("\n").map(String);

let points = [[]];
const lowestPoints = [];

for (var i = 0; i < array.length; i++) {
    const lineArray = array[i].split('').map(Number);
    points[i] = lineArray
}

for (var i = 0; i < points.length; i++) {
    for (var j = 0; j < points[i].length; j++) {
        const pointToCheck = Number(points[i][j]);
        let found = true;

        if ((i < (points.length - 1)) && (pointToCheck >= points[i + 1][j])) {
            found = false
        }

        if (i > 0 && (pointToCheck >= points[i - 1][j])) {
            found = false
        }

        if ((j < (points[i].length - 1)) && (pointToCheck >= points[i][j + 1])) {
            found = false
        }

        if ((j > 0) && (pointToCheck >= points[i][j - 1])) {
            found = false
        }

        if (found) {
            lowestPoints.push({ i: i, j: j })
        }
    }
}

function getSmallerNeigbors(i, j) {
    var result = [];
    const pointToCheck = Number(points[i][j]);

    if ((i < (points.length - 1)) && points[i + 1][j] !== 9 && pointToCheck < points[i + 1][j])
        result.push({ i: i + 1, j: j })

    if (i > 0 && points[i - 1][j] !== 9 && (pointToCheck < points[i - 1][j]))
        result.push({ i: i - 1, j: j })

    if ((j < (points[i].length - 1)) && points[i][j + 1] !== 9 && (pointToCheck < points[i][j + 1]))
        result.push({ i: i, j: j + 1 })

    if ((j > 0) && points[i][j - 1] !== 9 && (pointToCheck < points[i][j - 1]))
        result.push({ i: i, j: j - 1 })

    points[i][j] = -1

    return result;
}

var counts = [];

for (var k = 0; k < lowestPoints.length; k++) {
    var toCheck = [lowestPoints[k]]

    var count = 0;

    while (toCheck.length > 0) {
        var tmp = toCheck.pop();
        var found = getSmallerNeigbors(tmp.i, tmp.j)
        toCheck = [...toCheck, ...found]
    }

    count = 0;

    for (var i = 0; i < points.length; i++) {
        for (var j = 0; j < points[i].length; j++) {
            if (points[i][j] === -1)
                count++;
        }

    }

    var array = require('fs').readFileSync('../input.txt').toString().split("\n").map(String);
    for (var i = 0; i < array.length; i++) {
        const lineArray = array[i].split('').map(Number);
        points[i] = lineArray
    }

    counts.push(count);
}

counts.sort(function (a, b) {
    return a - b;
});

var sum = 1;
for (var i = 0; i < 3; i++) {
    sum *= counts.pop();
}
console.log(sum)