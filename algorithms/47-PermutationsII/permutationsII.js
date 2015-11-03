/**
 * @param {number[]} nums
 * @return {number[][]}
 * 找下一个比当前值大的值。
 */

var permuteUnique = function (nums) {
    result = [];
    nums.sort(function(a,b){
        return a > b ? 1 : -1;
    });
    result.push(nums.slice());
    while(nextPermutation(nums)){
        result.push(nums.slice());
    }

    return result;
}

var nextPermutation = function(nums) {
    var flag = 1;
    var descMaxIndex = nums.length - 1;
    while(flag && descMaxIndex > 0){
        if(nums[descMaxIndex] <= nums[descMaxIndex - 1]){
            descMaxIndex--;
        }else{
            flag = 0;
        }
    }


    var exchangeIndex = nums.length - 1;
    if(descMaxIndex-1 >= 0){
        while(exchangeIndex > descMaxIndex-1){
            if(nums[exchangeIndex] > nums[descMaxIndex-1]){
                temp = nums[descMaxIndex-1];
                nums[descMaxIndex-1] = nums[exchangeIndex];
                nums[exchangeIndex] = temp;
                reverseArr(nums,descMaxIndex,nums.length - 1);
                break;
            }else{
                exchangeIndex--;
            }
        }
        return 1;
    }else{
        return 0;
    }
}

function reverseArr(arr,left,right){
    while(left < right){
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

a = permuteUnique([1,2,3]);
console.log(a);

a = permuteUnique([1,1,2]);
console.log(a);
