var array = require('fs').readFileSync('../input.txt').toString().split("\n").map(String);

var count = 0;

for (var i = 0; i < array.length; i++) {
    let input = array[i].split(' | ')[1];
    // console.log(input)
    let words = input.split(' ');
    for (var j = 0; j < words.length; j++) {
        const length = words[j].length;
        if (length == 2 || length == 4 || length == 3 || length == 7)
            count++;
    }
}
console.log(count)