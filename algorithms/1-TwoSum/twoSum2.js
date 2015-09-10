/**
Two Sum
    Given an array of integers, find two numbers such that they add up to a specific target number.

    The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

    You may assume that each input would have exactly one solution.

    Input: numbers={2, 7, 11, 15}, target=9
    Output: index1=1, index2=2

思路：
将numbers放入map中，在map中寻找target - numbers[n] 的值。
数组中数字重复的情况，可以在map中存储数组进行解决。
时间复杂度 O(n) 空间复杂度O(n);

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = [];
    resultArr = [];
    for(var i = 0;i < nums.length;i++){
        if(!map[nums[i]]){
            map[nums[i]] = [];
        }
        map[nums[i]].push(i);
    }

    for(i = 0;i < nums.length;i++){
        searchNum = target - nums[i];
        searchNumArr = map[searchNum];
        if(searchNumArr && searchNumArr.length > 0){
            if(nums[i] === searchNum){
                if(searchNumArr.length > 1){
                    resultArr.push(searchNumArr[0]+1);
                    resultArr.push(searchNumArr[1]+1);
                    break;
                }
            }else{
                resultArr.push(i+1);
                resultArr.push(searchNumArr[0]+1);
                break;
            }
        }
    }
    return resultArr;
};

a = twoSum([3,2,4], 6);
console.log(a);
