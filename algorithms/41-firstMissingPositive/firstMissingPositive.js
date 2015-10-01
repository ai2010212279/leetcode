/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if (nums.length == 0) return 1;
    nums.sort(function(a, b) {
        return a > b ? 1 : -1;
    });
    var i = 0;
    while(nums[i] < 1){
        i++;
    }
    if(nums[i] != 1){
        if (nums[i - 1] < 1) return 1;
        if (nums[i] > 1) return 1;
    }
    i++;
    for (; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] > 1) {
            return nums[i - 1] + 1;
        }
    }
    return nums[i - 1] + 1;
};

a = firstMissingPositive([-3,-2,1,2,1000]);
console.log(a);
a = firstMissingPositive([-3,-2,1000]);
console.log(a);
a = firstMissingPositive([-3,-2,1]);
console.log(a);
a = firstMissingPositive([3,2,1000]);
console.log(a);
a = firstMissingPositive([-3,-2,1000]);
console.log(a);
a = firstMissingPositive([1]);
console.log(a);
a = firstMissingPositive([-2]);
console.log(a);
