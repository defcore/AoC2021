var array = require('fs').readFileSync('../input.txt').toString().split(",").map(Number);

const DAYS = 80;

for (var day = 0; day < DAYS; day++) {
    // console.log('day: ', day, array);
    for (var i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            array[i] = 6;
            array.push(9);
        } else
            array[i]--;
    }

}

// console.log('day: ', DAYS, array);
console.log('fishs:', array.length);