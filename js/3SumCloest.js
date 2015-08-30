/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a,b){
        return a > b ? 1 : -1;
    });
    cloestNum = -Math.pow(2,31);
    for(i = 0;i < nums.length - 2;i++){
        a = i + 1;
        b = nums.length - 1;
        while(a < b){
            num = nums[i] + nums[a] + nums[b];

            if(distance(target,num) <= distance(target,cloestNum)){
                cloestNum = num;
            }
            if(num < target){
                    a++;
                }else if (num === target){
                    return num;
                }else{
                    b--;
                }
        }
    }
    return cloestNum;
};

function distance(target,num){
    return Math.abs(target - num);
}

// b = threeSumClosest([ -9, -5, -2, -1, -1,-1, 0, 1, 1, 2, 3, 4 ],0);
// console.log(b);

b = threeSumClosest([1,2,4,8,16,32,64,128], 82);//82
console.log(b);

