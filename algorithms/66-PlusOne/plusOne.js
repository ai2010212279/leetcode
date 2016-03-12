/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    p = digits[digits.length - 1] + 1;
    digits[digits.length - 1] = p % 10;
    p = parseInt(p / 10);
    for (var i = digits.length - 2; i > -1; i--) {
        if (p > 0) {
            p = digits[i] + p;
            digits[i] = p % 10;
            p = parseInt(p / 10);
        }
    }

    if (p != 0) {
        var a = [p];
        return a.concat(digits);
    } else {
        return digits;
    }

};

c = plusOne([9,9])
console.log(c)
