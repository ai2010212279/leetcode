/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    result = [];
    candidates.sort(function(a, b) {
        return a > b ? -1 : 1;
    })
    for (var i = 0; i < candidates.length; i++) {
        var numbers = [];
        numbers.push(candidates[i]);
        getSum(i, candidates[i], target, numbers, candidates);
    }
    result.keys();
    return result;
};

var getSum = function(i, sum, target, numbers, candidates) {
    if (i < candidates.length) {
        if (sum == target) {
            result.push(numbers);
            return;
        } else if (sum > target) {
            return;
        } else {
            var number = candidates[i];
            nextNumbers = numbers.slice();
            sum1 = sum + number;
            nextNumbers.push(number);
            getSum(i, sum1, target, nextNumbers, candidates);

            number = candidates[i + 1];
            nextNumbers = numbers.slice();
            sum2 = sum + number;
            nextNumbers.push(number);
            getSum(i + 1, sum2, target, nextNumbers, candidates);
        }
    } else {
        return;
    }
}

a = combinationSum([3,2,1,5], 5);
console.log(a);
