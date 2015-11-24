/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
if (nums.length < 2) return true;
    var currentlLevelEnd = 0,
        nextLevelEnd = 0,
        level = 0,
        i = 0;
    while (currentlLevelEnd <= nums.length) {
        level++;
        while (i <= currentlLevelEnd) {
            nextLevelEnd = Math.max(nextLevelEnd, nums[i] + i);
            if (nextLevelEnd >= nums.length - 1) {
                return true;
            }
            i++;
        }
        if (nextLevelEnd == currentlLevelEnd) { //不可达
            return false;
        }
        currentlLevelEnd = nextLevelEnd;
    }

    return false;
};
