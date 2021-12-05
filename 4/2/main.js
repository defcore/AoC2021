var array = require('fs').readFileSync('../input.txt').toString().split("\n").map(String);

const numbers = array[0].split(",");

let boards = require('fs').readFileSync('../input.txt').toString().split("\n\n");
boards.shift();

let winningBoards = []
for (var i = 0; i < boards.length; i++) {
    winningBoards.push(false);
}

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

// check lines and rows in one loop might be more performand.

var result = 0;
for (var i = 5; i < numbers.length; i++) {
    const subset = numbers.slice(0, i);
    for (var b = 0; b < boards.length; b++) {
        const board = boards[b];
        if (!winningBoards[b]) {
            // check lines
            let lines = board.split("\n");
            for (var k = 0; k < lines.length; k++) {

                var lineNumbers = lines[k].split(/(?: |  )+/).filter(item => item != '');

                var found = true;
                for (var j = 0; j < lineNumbers.length; j++) {
                    if (!subset.includes(lineNumbers[j]))
                        found = false;
                }
                if (found) {
                    result = sumUnmarkedNumber(board, subset) * Number(subset[subset.length - 1])
                    winningBoards[b] = true;
                }
            }
        }


        // check rows
        if (!winningBoards[b]) {
            let lines2 = board.split("\n");
            for (var r = 0; r < 5; r++) {
                for (var j = 0; j < 5; j++) {
                    var rowNumbers = [];
                    for (var k = 0; k < lines2.length; k++) {
                        var lineNumbers2 = lines2[k].split(/(?: |  )+/).filter(item => item != '');
                        rowNumbers.push(lineNumbers2[r]);
                    }
                    found = true;
                    for (var j = 0; j < rowNumbers.length; j++) {
                        if (!subset.includes(rowNumbers[j]))
                            found = false;
                    }
                    if (found) {
                        result = sumUnmarkedNumber(board, subset) * Number(subset[subset.length - 1]);
                        winningBoards[b] = true;
                    }
                }
            }
        }
    }
}
console.log(result)