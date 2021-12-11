var array = require('fs').readFileSync('../input.txt').toString().split("\n").map(String);

var points = 0;

for (var i = 0; i < array.length; i++) {
    var stack = [];
    for (var j = 0; j < array[i].length; j++) {
        const char = array[i].charAt(j);
        if (char === '(' || char === '{' || char === '[' || char === '<')
            stack.push(char)
        else {
            var lastChar = stack.pop();
            if (char === ')' && lastChar !== '(')
                points += 3;
            if (char === '}' && lastChar !== '{')
                points += 1197;
            if (char === ']' && lastChar !== '[')
                points += 57;
            if (char === '>' && lastChar !== '<')
                points += 25137;
        }

    }
}

console.log(points)