/**
 * @param {number[]} nums
 * @return {number}
 * O(N)
 * 参考《编程珠玑》
 * 将数组分为[0..i-1],[i]，当前遇到的最大值要么在[0..i-1]中，要么为[0..i-1]的和，要么为[i];
 * 当[0..i-1]之和小于0时，当前最大值必定在[0..i-1]之中，而不是[0..i-1]之和，因此可以清空[0..i-1]之和，重新计算和;比较max,[i]
 * 当[0..i-1]之和大于0，比较max,[i],[0..i-1]之和
 *
 */
var maxSubArray = function(nums) {
    var max = nums[0];
    var tempSum = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (tempSum <= 0) {
            tempSum = 0;
        }

        if (nums[i] >= 0) {
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
    // console.log(max);
    return max;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
maxSubArray([-2, -1, 9]);
maxSubArray([-2, -1, -3, 3, -10, -9]);
maxSubArray([8,-19, 5, -4, 20]);
maxSubArray([8, -19, 5]);
maxSubArray([-1,-2,-3,-1]);
maxSubArray([7,8,-20,1]);
maxSubArray([2,-2,-2,0,-2,2,2]);
maxSubArray([2,-1,0,0,-1,2,2,-2,2]);
