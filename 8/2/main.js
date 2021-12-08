var array = require('fs').readFileSync('../input.txt').toString().split("\n").map(String);

const includesChars = (str1, str2) => {
    for (var i = 0; i < str2.length; i++)
        if (!str1.includes(str2[i]))
            return false
    return true
}

const includesExactChars = (str1, str2) => {
    if (str1.length !== str2.length)
        return false;
    for (var i = 0; i < str2.length; i++)
        if (!str1.includes(str2[i]))
            return false
    return true
}

const getCharThatDiffers = (str2, str1) => {
    for (var i = 0; i < str2.length; i++)
        if (!str1.includes(str2[i]))
            return str2[i];
    return ''
}

let detectDigit = (uniqueSighnalPatter) => {
    let signalPatterns = uniqueSighnalPatter.split(' ');
    const digits = {}

    for (var i = 0; i < signalPatterns.length; i++) {
        const signale = signalPatterns[i];
        if (signale.length === 2) {
            digits[1] = signale;
        }
        if (signale.length === 4) {
            digits[4] = signale;
        }
        if (signale.length === 3) {
            digits[7] = signale;
        }
        if (signale.length === 7) {
            digits[8] = signale;
        }
    }

    for (var i = 0; i < signalPatterns.length; i++) {
        const signale = signalPatterns[i];
        if (signale.length === 6) {
            if (!includesChars(signale, digits[1]))
                digits[6] = signale;
            if (!includesChars(signale, digits[4]) && includesChars(signale, digits[1]))
                digits[0] = signale;
            if (includesChars(signale, digits[4]) && includesChars(signale, digits[1]))
                digits[9] = signale;
        }
    }

    for (var i = 0; i < signalPatterns.length; i++) {
        const signale = signalPatterns[i];
        if (signale.length === 5) {
            if (includesChars(signale, digits[1]))
                digits[3] = signale;
            if (!includesChars(signale, digits[1]) && includesChars(signale, getCharThatDiffers(digits[8], digits[9])))
                digits[2] = signale;
            if (!includesChars(signale, digits[1]) && !includesChars(signale, getCharThatDiffers(digits[8], digits[9])))
                digits[5] = signale;
        }
    }

    return digits;
}

const connvertDigits = (digits, input) => {
    let inputArray = input.split(' ');
    let res = '';

    for (var i = 0; i < inputArray.length; i++) {
        for (var dig in digits) {
            if (includesExactChars(digits[dig], inputArray[i]))
                res += dig;
        }
    }
    return res;
}

var sum = 0;
for (var i = 0; i < array.length; i++) {
    let input = array[i].split(' | ');
    let digits = detectDigit(input[0])
    let result = connvertDigits(digits, input[1])
    sum += Number(result);
}

console.log(sum)