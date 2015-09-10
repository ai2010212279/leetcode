/**
 *
 No.1 Two Sum
    Given an array of integers, find two numbers such that they add up to a specific target number.

    The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

    You may assume that each input would have exactly one solution.

    Input: numbers={2, 7, 11, 15}, target=9
    Output: index1=1, index2=2

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    low = 0;

    resultArr = [];

    added = [];
    flag = 1;
    for(i = 0;i < nums.length && flag == 1; i++){
        value2 = nums[i];
        value1 = target - value2;
        if(added.indexOf(value1) != -1 ){
            resultArr.push(added.indexOf(value1) + 1);
            resultArr.push(i + 1);
            flag = 0;
        }else{
            added.push(value2);
        }
    }

    return resultArr;
};

a = twoSum([-3,4,3,0],0);
console.log(a);
