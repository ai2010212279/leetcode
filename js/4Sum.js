/**
这一题的思路和3sum类似，只是移动的内容添加了一个tail，复杂度上升很多。
*/
var fourSum = function(nums,target) {
    nums.sort(function(a,b){
        return a > b ? 1 : -1;
    });
    result = [];

    for(head = 0,tail = nums.length - 1;head <= tail - 2 && tail > 2;head++){
        if(head == tail - 2){
            head = 0;
            while(nums[tail] === nums[tail-1]){
                tail--;
            }
            tail--;
            console.log(tail);
        }
        if(nums[head] === nums[head-1]) {
            continue;
        }
        left = head+ 1;
        right = tail - 1;

        while(left < right){
            sum = nums[left]+nums[head]+nums[right]+nums[tail];
            temp = [];
            if( sum === target){
                console.log(head,left,right,tail);
                temp.push(nums[head]);
                temp.push(nums[left]);
                temp.push(nums[right]);
                temp.push(nums[tail]);
                result.push(temp);

                while(nums[left] === nums[left+1]) {left++;}
                while(nums[right] === nums[right-1]) {right--;}

                left++;
                right--;
            }
            else if(sum < target){
                while(nums[left] === nums[left+1]) {left++;}
                left++;
            }else if(sum > target){
                while(nums[right] === nums[right-1]) {right--;}
                right--;
            }

        }
    }

    return result;
};

// s = [1,0,-1,-2,2,0];
// b = fourSum(s,0);
// console.log(b);

s = [5,5,3,5,1,-5,1,-2];
b = fourSum(s,4);
console.log(b);
