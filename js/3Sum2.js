/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = unique3(nums);
    numsMap = retainHash(nums);
    resultArr = [];
    uniqueKeys = [];
    for(i = 0;i < nums.length;i++){
        for(j = 0;j < nums.length;j++){
            if(i === j){
                continue;
            }

            value3 = 0 - nums[i] - nums[j];
            tempArr = [nums[i],nums[j],value3];
            tempArr.sort(function(a,b){
                            return a - b;
                        });
            if(uniqueKeys[tempArr]){
                continue;
            }else{
                uniqueKeys[tempArr] = 1;
            }

            value3Arr = numsMap[value3];
            if(value3Arr != null ){
                flag = 1;
                for(k = 0;k < value3Arr.length && flag == 1; k++){
                    if(value3Arr[k] !== i && value3Arr[k] !== j){
                        temp = [nums[i],nums[j],value3];
                        temp.sort(function(a,b){
                            return a - b;
                        });
                        resultArr.push(temp);
                        flag = 0;
                    }
                }
            }
        }
    }

    return resultArr;
};

var unique3 = function(nums){
    numsCount = [];
    for(i = 0;i < nums.length;i++){
        key = ""+nums[i];
        if(numsCount[key] != null && numsCount[key] < 3){
            numsCount[key]++;
        }
        if(numsCount[key] == null){
            numsCount[key] = 1;
        }
    }


    unique3Arr = [];
    for(var key in numsCount){
        for(j = 0;j < numsCount[key];j++){
            unique3Arr.push(parseInt(key));
        }
    }
    return unique3Arr;
}

var retainHash = function(arr){
    map = [];
    for(i = 0;i < arr.length;i++){
        key = ''+arr[i];
        if(map[key] != null){
            map[key].push(i);
        }else{
            map[key] = [i];
        }
    }

    return map;
}

start = new Date().valueOf();

a = [4,-9,-13,-9,0,-12,12,-14,12,1,3,5,5,8,2,-2,8,1,2,-6,-6,1,6,-15,-2,7,-11,3,-2,1,11,10,8,14,8,-15,9,5,-14,6,14,-3,-12,4,-10,5,-12,13,14,-3,-15,-7,5,-2,-15,10,-10,11,-2,-5,-2,-5,-10,13,-14,14,13,2,4,7,-6,3,11,-3,-15,-14,10,10,6,1,-8,-2,1,12,11,1,7,8,-10,13,-11,3,-15,-6,-7,8,-7,13,-5,5,-3,4,-15,-7,9,-15,-14,-4,2,0,4,9,13,-10,-2,10];
b = threeSum(a);
console.log(b);
end = new Date().valueOf();
console.log(end - start);

