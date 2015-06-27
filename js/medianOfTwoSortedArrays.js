/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    a = mergeSort(nums1,nums2);
    median = getMedianOfArray(a);

    return median;

};

var getMedianOfArray = function(nums){
    if(nums.length % 2 === 0){
        index = parseInt((nums.length - 1) / 2);
        number = (    parseFloat(nums[index])
                    + parseFloat(nums[index + 1])
                  ) / 2;
    }else{
        index = parseInt((nums.length) / 2);
        number = nums[index];
    }
    return number;
}

var mergeSort = function(nums1,nums2){

    sortedArray = [];
    while(nums1.length > 0 && nums2.length > 0){
        if(nums1[0] <= nums2[0]){
            sortedArray.push(nums1[0]);
            nums1.shift();
        }else{
            sortedArray.push(nums2[0]);
            nums2.shift();
        }
    }

    if(nums1.length === 0){
        sortedArray = sortedArray.concat(nums2);
    }else{
        sortedArray = sortedArray.concat(nums1);
    }

    return sortedArray;
}

nums1 = [1,2];
nums2 = [];
a = findMedianSortedArrays(nums1,nums2);
console.log(a);
