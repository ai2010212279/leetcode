/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    result = 0;
    climbing(0,0,n);
    return result;
};

var climbing = function(stepCount, stairCount, n){
    if (stairCount > n){
        return;
    }else if (stairCount == n){
        result++;
    }else{
        climbing(stepCount + 1, stairCount + 1, n);
        climbing(stepCount + 1, stairCount + 2, n);
    }
}

console.log(climbStairs(10000));
