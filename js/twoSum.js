/**
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
