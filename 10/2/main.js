var array = require('fs').readFileSync('../input.txt').toString().split("\n").map(String);

var points = [];

for (var i = 0; i < array.length; i++) {
    var stack = [];
    var isIncomplete = false;
    for (var j = 0; j < array[i].length; j++) {
        const char = array[i].charAt(j);
        if (char === '(' || char === '{' || char === '[' || char === '<')
            stack.push(char)
        else {
            var lastChar = stack.pop();
            if (char === ')' && lastChar !== '(')
                isIncomplete = true;
            if (char === '}' && lastChar !== '{')
                isIncomplete = true;
            if (char === ']' && lastChar !== '[')
                isIncomplete = true;
            if (char === '>' && lastChar !== '<')
                isIncomplete = true;
        }
    }

    if (stack.length > 0 && !isIncomplete) {
        let tmp = stack.pop();
        var point = 0;
        while (tmp !== undefined) {
            point *= 5;
            if (tmp === '(')
                point += 1;
            if (tmp === '[')
                point += 2;
            if (tmp === '{')
                point += 3;
            if (tmp === '<')
                point += 4;


            tmp = stack.pop();
        }

        points.push(point)
    }
}

points = points.sort(function (a, b) { return a - b; })

const middleId = Math.floor(points.length / 2);

console.log(points[middleId])
