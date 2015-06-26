/**
 * leetcode No.228 Summary Ranges
 * @param {number[]} nums
 * @return {string[]}
 *
 */
var summaryRanges = function(nums) {
    if(nums.length === 0){
        return [];
    }

    resultArray = [];
    start = nums[0];
    end = nums[0];
    for(i = 1;i <= nums.length;i++){
        //i == nums.length的时候下标越界。
        if(i != nums.length && nums[i] - end == 1){
            end = nums[i];
        }else{
            em = (start == end
                ? start.toString()
                : start.toString() + '->' + end.toString());
            resultArray.push(em);
            start = nums[i];
            end = nums[i];
        }

    }

    return resultArray;
};

a = new Array(-1,0,1,2,4,6,7,8,10);
console.log(a);
b = summaryRanges(a);
console.log(b);

