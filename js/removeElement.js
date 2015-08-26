/**
Remove Element
Given an array and a value, remove all instances of that value in place and return the new length.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.


O(n);

 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(i = 0,j = 0;i < nums.length;i++){
        if(nums[i] === val){
            j++;
        }
    }
    return nums.length - j;
};

a = [1,1,3,2,4,2,1,1];
b = removeElement(a,1);
console.log(b);
