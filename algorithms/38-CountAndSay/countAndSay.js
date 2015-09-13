/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var numbers = '1';
    for (var i = 2 ; i <= n; i++) {
        numbers = sayNumber(numbers);
    }
    return numbers;
};

/**
 * @param  {string} numbers
 * @return {string}
 */
var sayNumber = function(numbers) {
    var count = 1;
    result = '';
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] != numbers[i - 1]) {
            result = '' + result + count + numbers[i - 1];
            count = 1;
        } else {
            count++;
        }
    }
    result = '' + result + count + numbers[i - 1];
    return result;
}

a = 30;
b = countAndSay(a);
console.log(b);
