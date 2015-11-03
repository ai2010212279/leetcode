/**
 * @param {number[]} nums
 * @return {number}
 * 注：本例将跑出全部的可能，耗时很长。
 */
var jump = function(nums) {
    resultSteps = [];
    jumpToEnd(0, 0, nums);
    if (resultSteps.length == 0) {
        resultSteps[0];
    }
    return resultSteps[0];
}

var jumpToEnd = function(index, step, nums) {
    if (index == nums.length - 1) {
        if (resultSteps.length == 0) {
            resultSteps.push(step);
        } else if (step < resultSteps[0]) {
            resultSteps[0] = step;
        }
        return;
    }
    if (resultSteps.length > 0) {
        if (step >= resultSteps[0]) {
            return;
        }
    }
    var jumpLength = nums[index];
    while (jumpLength > 0) {
        jumpToEnd(index + jumpLength, step + 1, nums);
        jumpLength--;
    }
}

// a = [2,3,1,1,4];
// b = jump(a);
// console.log(b);


// a = [1,1];
// b = jump(a);
// console.log(b);

// a = [6, 2, 6, 1, 7, 9, 3, 5, 3, 7, 2, 8, 9, 4, 7, 7, 2, 2, 8, 4, 6, 6, 1, 3];
// b = jump(a);
// console.log(b);

a = [8,2,4,4,4,9,5,2,5,8,8,0,8,6,9,1,1,6,3,5,1,2,6,6,0,4,8,6,0,3,2,8,7,6,5,1,7,0,3,4,8,3,5,9,0,4,0,1,0,5,9,2,0,7,0,2,1,0,8,2,5,1,2,3,9,7,4,7,0,0,1,8,5,6,7,5,1,9,9,3,5,0,7,5];
b = jump(a);
console.log(b);
