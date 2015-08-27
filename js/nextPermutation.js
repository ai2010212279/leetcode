/**
Next Permutation
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    lastestIndex = nums.length - 1;
    for(i = nums.length - 2;i > -1;i--){
        if(nums[lastestIndex] > nums[i]){
            temp = nums[i];
            nums[i] = nums[lastestIndex];
            nums[lastestIndex] = temp;
            return nums;
        }
    }

//有可能是不合适的
    return nums.sort(function(a,b){
        return a > b ? 1 : -1;
    });
};

a = [1,2,3];
b = nextPermutation(a);
console.log(b);

a = [3,2,1];
b = nextPermutation(a);
console.log(b);

a = [1,1,5];
b = nextPermutation(a);
console.log(b);

a = [1,1,1,0];
b = nextPermutation(a);
console.log(b);
