var array = require('fs').readFileSync('../input.txt').toString().split(",").map(Number);

const DAYS = 256;
let days = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }

// init
for (var i = 0; i < array.length; i++) {
    days[array[i]] += 1;
}

for (var day = 1; day < DAYS; day++) {
    for (var i = 1; i <= 9; i++) {
        days[i - 1] = days[i]
    }
    if (day != 0) {
        days[7] += days[0]
        days[9] = days[0]
    }
}

let count = 0;
for (var i = 0; i < 9; i++) {
    count += days[i];
}
console.log('fishs:', count);