/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 最差时间复杂度O(3logn);
 */
var search = function(nums, target) {
    var low = 0,
        high = nums.length - 1;
    var isRotate = 0;
    while (nums[low] > nums[high] && high - low >= 1) {
        isRotate = 1;
        if (high == low + 1) break;

        var mid = parseInt(low + (high - low) / 2);
        if (nums[mid] > nums[low]) {
            low = mid;
        } else if (nums[mid] < nums[low]) {
            high = mid;
        }
    }

    if (!isRotate) {
        return searchInSortedList(nums, low, high, target);
    } else {
        var a = searchInSortedList(nums, 0, low, target);
        if (a == -1) {
            return searchInSortedList(nums, high, nums.length - 1, target);
        } else {
            return a;
        }
    }
};

var searchInSortedList = function(arr, low, high, target) {
    if (low > high) return -1;
    var mid = parseInt(low + (high - low) / 2);

    if (arr[mid] == target) {
        return mid;
    } else if (arr[mid] < target) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
    return searchInSortedList(arr, low, high, target);
}

a = search([9, 10, 11,13,14,15,18,20,21, 1, 2, 3,4,5,6], 11);
console.log(a);

a = search([1,0], 0);
console.log(a);

a = search([0,2,3,4,5,7], 5);
console.log(a);
