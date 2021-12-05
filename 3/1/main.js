var array = require('fs').readFileSync('../input.txt').toString().split("\n").map(String);

var gammaRate = "";
var epsilonRate = "";

var zeros = 0;
var ones = 0;

for (let j = 0; j < array[0].length; j++) {
    zeros = 0;
    ones = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(j) === "0")
            zeros++;
        else
            ones++;
    }
    if (zeros > ones) {
        gammaRate += "0"
        epsilonRate += "1"
    } else {
        gammaRate += "1";
        epsilonRate += "0"
    }
}

console.log(gammaRate);
console.log(epsilonRate);

console.log(parseInt(gammaRate, 2))
console.log(parseInt(epsilonRate, 2))

console.log(parseInt(gammaRate, 2) * parseInt(epsilonRate, 2))