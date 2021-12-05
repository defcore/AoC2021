var array = require('fs').readFileSync('../input.txt').toString().split("\n").map(String);

const numbers = array[0].split(",");

let boards = require('fs').readFileSync('../input.txt').toString().split("\n\n");
boards.shift();

function sumUnmarkedNumber(board, subset) {
    let sum = 0;
    let lines = board.split("\n");
    for (var k = 0; k < lines.length; k++) {
        var lineNumbers = lines[k].split(/(?: |  )+/).filter(item => item != '');
        for (var j = 0; j < lineNumbers.length; j++) {
            if (!subset.includes(lineNumbers[j]))
                sum += Number(lineNumbers[j])
        }
    }
    return sum;
}

for (var i = 5; i < numbers.length; i++) {
    const subset = numbers.slice(0, i);
    for (var b = 0; b < boards.length; b++) {
        const board = boards[b];

        // check lines
        let lines = board.split("\n");
        for (var k = 0; k < lines.length; k++) {

            // console.log(number)
            var lineNumbers = lines[k].split(/(?: |  )+/).filter(item => item != '');
            // console.log(lineNumbers)

            // console.log('lineNumbers', lineNumbers)
            // console.log('subset', subset)

            var found = true;
            for (var j = 0; j < lineNumbers.length; j++) {
                if (!subset.includes(lineNumbers[j]))
                    found = false;
            }
            if (found) {
                // console.log('res', lineNumbers)
                console.log('sum', sumUnmarkedNumber(board, subset) * Number(subset[subset.length - 1]))
                process.exit(1)
            }
        }


        // check rows
        let lines2 = board.split("\n");

        for (var r = 0; r < 5; r++) {
            for (var j = 0; j < 5; j++) {
                var rowNumbers = [];
                for (var k = 0; k < lines2.length; k++) {
                    var lineNumbers2 = lines2[k].split(/(?: |  )+/).filter(item => item != '');

                    // console.log(lineNumbers2)

                    // console.log(number)
                    rowNumbers.push(lineNumbers2[r]);
                    // console.log(lineNumbers)


                }

                // console.log('rownumbers', rowNumbers)
                // console.log('subset', subset)

                found = true;
                for (var j = 0; j < rowNumbers.length; j++) {
                    if (!subset.includes(rowNumbers[j]))
                        found = false;
                }
                if (found) {
                    // console.log('res', rowNumbers)
                    console.log('sum', sumUnmarkedNumber(board, subset) * Number(subset[subset.length - 1]))
                    process.exit(1)
                }
            }
        }
    }
}