/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums){
    resultSteps = [];
    jumpToEnd(0,0,nums);
    if(resultSteps.length > 0){
        minStep = Math.min.apply({},resultSteps);
        return minStep;
    }
    return 0;
}

var jumpToEnd = function(index,step,nums){
    if(index == nums.length - 1) {
        resultSteps.push(step);
    }
    var jumpLength = nums[index];
    while(jumpLength > 0){
        jumpToEnd(index + jumpLength,step + 1,nums);
        jumpLength--;
    }
}

a = [2,3,1,1,4];
b = jump(a);
console.log(b);


a = [1,1];
b = jump(a);
console.log(b);

a = [6,2,6,1,7,9,3,5,3,7,2,8,9,4,7,7,2,2,8,4,6,6,1,3];
b = jump(a);
console.log(b);
