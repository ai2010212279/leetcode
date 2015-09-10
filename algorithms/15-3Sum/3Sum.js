/**

思路：
num[i],number[left],number[right]3个值相加，和大于target，right--;和小于target,left++;left >= right时，i++;遍历完成时可得到所有可能的组合。
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a,b){
        return a > b ? 1 : -1;
    });
    result = [];
    for(i = 0;i < nums.length - 2;i++){
        if(nums[i] === nums[i-1]) {
            continue;
        }
        left = i+ 1;
        right = nums.length - 1;
        while(left < right){
            temp = [];
            if(nums[left]+nums[i]+nums[right] === 0){
                temp.push(nums[i]);
                temp.push(nums[left]);
                temp.push(nums[right]);
                result.push(temp);

                while(nums[left] === nums[left+1]) {left++;}
                while(nums[right] === nums[right-1]) {right--;}

                left++;
                right--;
            }
            else if(nums[left]+nums[i]+nums[right] < 0){
                while(nums[left] === nums[left+1]) {left++;}
                left++;
            }else if(nums[left]+nums[i]+nums[right] > 0){
                while(nums[right] === nums[right-1]) {right--;}
                right--;
            }

        }
    }

    return result;
};
// a = [4,-9,-13,-9,0,-12,12,-14,12,1,3,5,5,8,2,-2,8,1,2,-6,-6,1,6,-15,-2,7,-11,3,-2,1,11,10,8,14,8,-15,9,5,-14,6,14,-3,-12,4,-10,5,-12,13,14,-3,-15,-7,5,-2,-15,10,-10,11,-2,-5,-2,-5,-10,13,-14,14,13,2,4,7,-6,3,11,-3,-15,-14,10,10,6,1,-8,-2,1,12,11,1,7,8,-10,13,-11,3,-15,-6,-7,8,-7,13,-5,5,-3,4,-15,-7,9,-15,-14,-4,2,0,4,9,13,-10,-2,10];
// b = threeSum(a);
// console.log(b);

// a = [0,0,0,0];
// b = threeSum(a);
// console.log(b);

// a = [-2,-1,-1,-1,0,0,0,1,2,3];
// b = threeSum(a);
// console.log(b);

b = threeSum([-2,-1,1,2]);
console.log(b);
