/**
Remove Element
Given an array and a value, remove all instances of that value in place and return the new length.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

题目大意：获取新数组的长度，并且新数组内的数据要保留除val以外的所有数据，顺序可以不同。
O(n);

 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var head = 0,tail = nums.length;
    while(head < tail){
        if(nums[head]==val){
            nums[head] = nums[tail-1];
            tail--;
        }else{
            head++;
        }
    }
    console.log(a);
    return tail;
};

a = [1,2,3,43,2,1,2];
b = removeElement(a,2);
console.log(b);

