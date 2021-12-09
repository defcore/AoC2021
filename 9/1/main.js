var array = require('fs').readFileSync('../input.txt').toString().split("\n").map(String);

const points = [[]];
let riskLevel = 0;

for (var i = 0; i < array.length; i++) {
    const lineArray = array[i].split('').map(Number);
    points[i] = lineArray
}

for (var i = 0; i < points.length; i++) {
    for (var j = 0; j < points[i].length; j++) {
        const pointToCheck = Number(points[i][j]);
        let found = true;
        let count = 0;

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
            riskLevel += (1 + pointToCheck);
        }
    }
}

console.log(riskLevel)