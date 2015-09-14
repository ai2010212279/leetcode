/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    result = [];
    result1 = [];
    candidates.sort(function(a,b){
        return a > b ? 1 : -1;
    });
    for (var i = 0; i < candidates.length; i++) {
        var targetCopy = target - candidates[i];
        var digits = [];
        digits.push(candidates[i]);
        getSum(i + 1, digits, targetCopy, candidates);
    }
    return result;
};

var getSum = function(index, digits, target, candidates) {
    if (target == 0) {
        digitsString = digits.join();
        if (result1.indexOf(digitsString) == -1) {
            result1.push(digitsString);
            result.push(digits);
        }
        return;
    }
    if (target < 0) return;
    if (index == candidates.length) return;

    var targetCopy = target - candidates[index];
    var digits1 = digits.slice();
    digits1.push(candidates[index]);
    getSum(index + 1, digits1, targetCopy, candidates);

    digits2 = digits.slice();
    getSum(index + 1, digits2, target, candidates);

}

a = [10, 1, 2, 7, 6, 1, 5];
b = combinationSum2(a, 8);
console.log(b);
