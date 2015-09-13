/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    result = [];
    for (var i = 0; i < candidates.length; i++) {
        var targetCopy = target;
        var j = parseInt(targetCopy / candidates[i]);
        var dividedResult = [];
        var sum = 0;

        while (j > 0) {
            dividedResultTemp = dividedResult.slice();
            dividedResultTemp[i] = j;
            sum = sum + j * candidates[i];
            targetCopy = target - j * candidates[i];
            getSum(i + 1, sum, dividedResultTemp, targetCopy, candidates);
            j--;
        }

    }
    return result;
};

var getSum = function(index, sum, dividedResult, target, candidates) {

    if (target == 0) {
        pushToResult(dividedResult, candidates);
        return;
    }
    if (index == candidates.length) return;

    var j = parseInt(target / candidates[index]);
    var targetCopy = target;

    while (j >= 0) {
        dividedResultTemp = dividedResult.slice();
        dividedResultTemp[index] = j;
        sum = sum + j * candidates[index];
        targetCopy = target - j * candidates[index];
        getSum(index + 1, sum, dividedResultTemp, targetCopy, candidates);
        j--;
    }
}

var pushToResult = function(dividedResult, candidates) {
    temp = [];

    for (var i = 0; i < dividedResult.length; i++) {
        if (dividedResult[i]) {
            while (dividedResult[i]) {
                temp.push(candidates[i]);
                dividedResult[i]--;
            }
        }
    }
    temp.sort(function(a,b){
        return a > b ? 1 : -1;
    })

    result.push(temp);
}

a = combinationSum([3, 2, 1, 5], 7);
console.log(a);
