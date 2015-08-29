/**
Remove Duplicates from Sorted Array
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.


 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var head = 0,tail = head+1;
    while(tail < nums.length){
        if(nums[head] == nums[tail]){
            tail++;
        }else{
            nums[head+1] = nums[tail];
            head++;
            tail++;
        }
    }
    return head+1;
};

a = [1,1,2,3,3,3,4,4,5,5,5,5];
b = removeDuplicates(a);
console.log(b);

b = removeDuplicates([1,1]);
console.log(b);

b = removeDuplicates([1,2,3,4,5,6,6,6,6,6]);
console.log(b);

b = removeDuplicates([1])
console.log(b);

b = removeDuplicates([1,2,5]);
console.log(b);

b = removeDuplicates([1,1,1,2,5]);
console.log(b);

