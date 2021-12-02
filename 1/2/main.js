var array = require('fs').readFileSync('../input.txt').toString().split("\n").map(Number);

var count = 0;
let previousSum = 0;

for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = 0; j < 3; j++)
        sum += array[i + j]

    if (previousSum != 0 && previousSum < sum)
        count++;

    previousSum = sum;
}

console.log(count);