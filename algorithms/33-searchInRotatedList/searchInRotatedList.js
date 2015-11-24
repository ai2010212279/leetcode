/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 最差时间复杂度O(n);
 */
var search = function(nums, target) {
    var low = 0,
        high = nums.length - 1;
    while (nums[low] >= nums[high] && low < high) {
        if (nums[low] == target) {
            return low;
        }
        if (nums[high] == target) {
            return high;
        }
        low++;
        high--;
    }

    while (low <= high) {
        mid = parseInt((high - low) / 2 + low);
        if (target == nums[mid]) {
            return mid;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};

a = search([4, 6, 7, 8, 9, 10, 11, 1, 2, 3], 10);
console.log(a);
