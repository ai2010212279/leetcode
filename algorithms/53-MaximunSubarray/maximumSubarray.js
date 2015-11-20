/**
 * @param {number[]} nums
 * @return {number}
 * O(N)
 * 思路：
 * 1.求和，如果当前和大于等于之前的和，说明遇到整数或者0，跳到第二步，否则挑到第四步；
 * 2.如果当前和大于最大值，那么最大值等于当前和；
 * 3.如果当前游标的值大于最大值，说明遇到之前的和小于0的情况，此时最大值等于当前游标指向的值，和清零；重复第一步
 * 4.此时遇到的是负数,如果当前游标的值大于最大值，说明遇到之前的和小于0的情况，此时最大值等于当前游标指向的值，和清零
 * ;重复第一步
 * 5.循环结束，返回最大值。
 */
var maxSubArray = function(nums) {
    var max = nums[0];
    var tempSum = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (tempSum + nums[i] >= tempSum) {
            if (tempSum + nums[i] > max) {
                max = tempSum + nums[i];
            }
            if (nums[i] > max) {
                max = nums[i];
                tempSum = 0;
            }
        } else {
            if (nums[i] > max) {
                max = nums[i];
                tempSum = 0;
            }
        }
        tempSum += nums[i];
    }
    console.log(max);
    return max;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
maxSubArray([-2, -1, 9]);
maxSubArray([-2, -1, -3, 3, -10, -9]);
