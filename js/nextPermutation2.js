/**
Next Permutation
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

思路:找到左边的最大逆序序列,如[2,1,4,2,1](设为a)中的[4,2,1](设为b)。此时需要进行交换的数据是a[1]=1,b中从左边开始算起大于a[1]的数，即b[1] = 2；
时间复杂度：O(n);

错误
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
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

    if(descMaxIndex !== 0){
        var exchangeIndex = nums.length - 1;
        while(exchangeIndex > descMaxIndex-1){
            if(nums[exchangeIndex] > nums[descMaxIndex-1]){
                temp = nums[exchangeIndex];
                nums[exchangeIndex] = nums[descMaxIndex-1];
                nums[descMaxIndex-1] = temp;
                break;
            }else{
                exchangeIndex--;
            }
        }
    }else{
        return reverseArr(nums);
    }

}

function reverseArr(arr){
    for(i = 0,j = arr.length -1;i < j;i++,j--){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

// a = [1,3,1,4];
// b = nextPermutation(a);
// console.log(b);

a = [3,2,1,0];
b = nextPermutation(a);
console.log(a);

// a = [1,1,5];
// b = nextPermutation(a);
// console.log(b);

// a = [1,1,1,0];
// b = nextPermutation(a);
// console.log(b);

// a = [1,3,2,4];
// b = nextPermutation(a);
// console.log(b);

// a = [1,3,4,2];
// b = nextPermutation(a);
// console.log(b);

a = [1];
b = nextPermutation(a);
console.log(a);
