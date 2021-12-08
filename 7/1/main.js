var array = require('fs').readFileSync('../input.txt').toString().split(",").map(Number);

var minFuel = 0;
var position = 0;

const maxPosition = Math.max(...array)
console.log(maxPosition)

for (var j = 0; j < maxPosition; j++) {
    let fuel = 0;
    for (var i = 0; i < array.length; i++) {
        fuel += Math.abs(array[i] - j)
    }

    if (minFuel === 0 || minFuel > fuel) {
        minFuel = fuel;
        position = j;
    }
}
console.log('position', position)
console.log('fuel', minFuel)