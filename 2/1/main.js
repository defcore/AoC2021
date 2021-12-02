var array = require('fs').readFileSync('../input.txt').toString().split("\n").map(String);

var horizontal = 0;
var depth = 0;

for (let i = 0; i < array.length; i++) {
    let split = array[i].split(" ");

    let command = split[0];
    let value = Number(split[1]);

    if (command == 'forward')
        horizontal += value;
    if (command == 'down')
        depth += value;
    if (command == 'up')
        depth -= value;
}

// console.log(horizontal);
// console.log(depth);
console.log(horizontal * depth);