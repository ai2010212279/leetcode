/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (var i = 0; i < nums.length;){
        if(target <= nums[i]){
            break;
        }else if (target > nums[i]){
            i++;
        }
    };
    return i;
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
