/**
Next Permutation
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

思路:
1.找到左边的最大逆序序列,如[2,1,4,2,1](设为a)中的[4,2,1](设为b)。
2.此时需要进行交换的数据是a[1]=1,b中从右边开始算起大于a[1]的数，即b[1] = 2；
3.将b进行翻转
时间复杂度：O(n);
目前需要精简代码，运行时间太高

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


    var exchangeIndex = nums.length - 1;
    if(descMaxIndex-1 >= 0){
        while(exchangeIndex > descMaxIndex-1){
            if(nums[exchangeIndex] > nums[descMaxIndex-1]){
                temp = nums[descMaxIndex-1];
                nums[descMaxIndex-1] = nums[exchangeIndex];
                nums[exchangeInex] = temp;
                reverseArr(nums,descMaxIndex,nums.length - 1);
                break;
            }else{
                exchangeIndex--;
            }
        }
    }else{
        reverseArr(nums,0,nums.length-1);
    }
    console.log(nums);
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



a = [1,3,1,4];//1341
b = nextPermutation(a);

a = [2,3,1];//312
b = nextPermutation(a);

a = [1,1,5];//151
b = nextPermutation(a);

a = [1,1,1,0];//0111
b = nextPermutation(a);

// a = [1,3,2,4];
// b = nextPermutation(a);

a = [1,3,2,5,3,2];//1,3,3,2,2,5
b = nextPermutation(a);

// a = [1,2];
// b = nextPermutation(a);

// a = [1,3,2];
// nextPermutation(a);

// a = [1,4,3,2];
// nextPermutation(a);

// a = [2,3,2];
// nextPermutation(a);

// a  = [3,2,1]
// nextPermutation(a);

// a = [5,4,7,5,3,2];//[5,5,2,3,4,7]
// nextPermutation(a);
