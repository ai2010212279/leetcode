/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var lowIndex = -1;
    var highIndex = -1;
    var i = 0;
    var j = nums.length - 1;
    do{
       if(nums[i] == target){
            lowIndex = i;
            break;
        }else{
            i++;
        }
    }while(i < nums.length);
    do{
       if(nums[j] == target){
            highIndex = j;
            break;
        }else{
            j--;
        }
    }while(j >= 0);
    return [lowIndex,highIndex];
};

a = [1,2,3,4,5,5,6,7,8,9,10];
b = searchRange(a,5);

a = [1,2,3,4,5,6,7];
b = searchRange(a,8);

a = [0,3];
b = searchRange(a,0);
