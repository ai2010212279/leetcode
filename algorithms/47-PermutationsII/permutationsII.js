/**
 * @param {number[]} nums
 * @return {number[][]}
 * 找下一个比当前值大的值。
 */

var permuteUnique = function (nums) {
    result = [];
    result.push(nums.slice());
    var i = nums.length - 2;
    while(i > -1){
        if(nums[i] < nums[i + 1]){
            temp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = temp;

            for (var j = nums[nums.length - 1], k = i + 1; j > k;k++,j--){
                temp = nums[k];
                nums[k] = nums[j];
                nums[j] = temp;
            }
            nums1 = nums.slice();
            result.push(nums1);
            i = nums.length - 1;
        }
        i--;
    }
    return result;
}

a = permuteUnique([1,1,2]);
console.log(a);
