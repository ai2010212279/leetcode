/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums){
    result = [];
    permutations(nums,[]);
    resultPermute = [];
    return result;
}

var permutations = function(nums,permute){
    if(permute.length === nums.length) {
        var temp = [];
        for (var i = 0; i < permute.length; i++){
            temp[i] = nums[permute[i]];
        }
        result.push(temp);
    }
    for (var i = 0; i < nums.length; i++){
        if(permute.indexOf(i) == -1){
            var permute1 = permute.slice();
            permute1.push(i);
            permutations(nums,permute1);
        }
    }
}

a = [2,2,8];
b = permute(a);
console.log(b);
