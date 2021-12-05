var array = require('fs').readFileSync('../input.txt').toString().split("\n").map(String);

function count(value, position) {
    var zeros = 0;
    var ones = 0;
    for (let i = 0; i < value.length; i++) {
        if (value[i].charAt(position) === "0")
            zeros++;
        else
            ones++;
    }
    return ones >= zeros
}

function filter(arr, position, isMore) {
    if (arr.length !== 1) {
        const moreOnce = count(arr, position)
        if (isMore ? moreOnce : !moreOnce) {
            arr = arr.filter(item => item.charAt(position) === "1");
        } else {
            arr = arr.filter(item => item.charAt(position) === "0");
        }
    }
    return arr;
}

var ocygen = [...array];
var co2 = [...array];

for (let j = 0; j < array[0].length; j++) {
    ocygen = filter(ocygen, j, true)
    co2 = filter(co2, j, false)
}

// console.log(parseInt(ocygen[0], 2));
// console.log(parseInt(co2[0], 2));

console.log(parseInt(ocygen[0], 2) * parseInt(co2[0], 2))