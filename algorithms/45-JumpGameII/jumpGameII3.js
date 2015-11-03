/**
 * @param {number[]} nums
 * @return {number}
 * 注：参考DISCUSS中的想法，广度优先搜索
 */
var jump = function(nums) {
    if (nums.length < 2) return 0;
    var currentlLevelEnd = 0,
        nextLevelEnd = 0,
        level = 0,
        i = 0;
    while (currentlLevelEnd <= nums.length) {
        level++;
        while (i <= currentlLevelEnd) {
            nextLevelEnd = Math.max(nextLevelEnd, nums[i] + i);
            if (nextLevelEnd >= nums.length - 1) {
                return level;
            }
            i++;
        }
        if (nextLevelEnd == currentlLevelEnd) { //不可达
            return 0;
        }
        currentlLevelEnd = nextLevelEnd;
    }

    return 0;
}
a = [8, 2, 4, 4, 4, 9, 5, 2, 5, 8, 8, 0, 8, 6, 9, 1, 1, 6, 3, 5, 1, 2, 6, 6, 0, 4, 8, 6, 0, 3, 2, 8, 7, 6, 5, 1, 7, 0, 3, 4, 8, 3, 5, 9, 0, 4, 0, 1, 0, 5, 9, 2, 0, 7, 0, 2, 1, 0, 8, 2, 5, 1, 2, 3, 9, 7, 4, 7, 0, 0, 1, 8, 5, 6, 7, 5, 1, 9, 9, 3, 5, 0, 7, 5];

b = jump(a);
console.log(b);

a = [1, 0, 0, 2];
b = jump(a);
console.log(b);
