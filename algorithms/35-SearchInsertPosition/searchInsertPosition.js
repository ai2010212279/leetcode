/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    targetIndex = binarySearch(nums,target);
    if(target <= nums[targetIndex]){
        return targetIndex
    }else{
        return targetIndex + 1;
    }
};

function binarySearch (arr,target) {
    var targetIndex = -1;
    var low = 0;
    var high = arr.length - 1;
    while(low <= high){
        middle = parseInt(low + (high - low) / 2);
        if(arr[middle] > target){
            high = middle - 1;
        }else if(arr[middle] < target){
            low = middle + 1;
        }else{
            return middle;
        }
    }
    // console.log(low,middle,high);
    return middle;
}

a = [2,4,6,8,10,12,14];
b = searchInsert(a,1);
console.log(b);

b = searchInsert(a,2);
console.log(b);

b = searchInsert(a,3);
console.log(b);

b = searchInsert(a,4);
console.log(b);

b = searchInsert(a,5);
console.log(b);

b = searchInsert(a,6);
console.log(b);

b = searchInsert(a,7);
console.log(b);

b = searchInsert(a,8);
console.log(b);

b = searchInsert(a,9);
console.log(b);

b = searchInsert(a,10);
console.log(b);

b = searchInsert(a,11);
console.log(b);

b = searchInsert(a,12);
console.log(b);

b = searchInsert(a,13);
console.log(b);

b = searchInsert(a,14);
console.log(b);

b = searchInsert(a,15);
console.log(b);

b = searchInsert(a,16);
console.log(b);

b = searchInsert(a,17);
console.log(b);

b = searchInsert(a,18);
console.log(b);

b = searchInsert(a,19);
console.log(b)

b = searchInsert(a,20);
console.log(b)
