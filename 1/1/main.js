var array = require('fs').readFileSync('../input.txt').toString().split("\n").map(Number);

var count = 0;

for (let i = 1; i < array.length; i++)
    if (array[i - 1] < array[i])
        count++;

console.log(count);