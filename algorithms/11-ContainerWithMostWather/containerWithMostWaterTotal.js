
/**
Container With Most Water Total

Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container.

思路：
容器的容积取决于height较小的一边。
因此，为了找到更大的容积，height较小的一边就得向height更大的一边进行移动(left++,right--);
移动后的容积与移动前的容积进行比较，保留大的即可。
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var maxArea = 0;
    var left = 0,right = height.length - 1;
    while(left < right){
        tempAera = (right-left) * getMin(height[right],height[left]);
        maxArea = maxArea > tempAera ? maxArea : tempAera;
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxArea;
};

function getMin(a,b){
    return a < b ? a : b;
}


// b = maxArea([1,2,3,1,2,4,5,1,2]);
// console.log(b);

// b = maxArea([1,2]);
// console.log(b);

// b = maxArea([1,2,4,3,1,2,1]);
// console.log(b);

b = maxArea([5,1,2,5,6,2,3,1,3,5]);
console.log(b);
