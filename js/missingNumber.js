/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort(function(a,b){
        return a > b ? 1 : -1;
    });

    low = 0;
    high = nums.length - 1

    if(nums[0] !== 0) return 0;
    if(nums[high] === high) return high + 1;

    while(low + 1 !== high && low < high){
        midIndex = parseInt(low + (high - low) / 2);
        if(midIndex < nums[midIndex]){
            high = midIndex;
        }else{
            low = midIndex;
        }
    }

    return nums[low] + 1;
};
// var missingNumber = function(nums){
//     for(i = 0;i < nums.length;i++){
//         if(nums[i] + 1 !== nums[i+1]){
//             break;
//         }
//     }
//     return nums[i] + 1;
// }

a = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14];
b = missingNumber(a);
console.log(b);
