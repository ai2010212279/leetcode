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

    minLength = Math.min(nums1.length,nums2.length)
    i = 0;
    j = 0;
    sortedArray = [];
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] <= nums2[j]){
            sortedArray.push(nums1[i]);
            i++;
        }else{
            sortedArray.push(nums2[j]);
            j++;
        }
    }

    if(i == nums1.length){

        for(;j < nums2.length;j++){
            sortedArray.push(nums2[j]);
        }
    }else{

        for(;i < nums1.length;i++){
            sortedArray.push(nums1[i]);
        }
    }

    return sortedArray;
}

nums1 = [1,2];
nums2 = [];
a = findMedianSortedArrays(nums1,nums2);
console.log(a);
