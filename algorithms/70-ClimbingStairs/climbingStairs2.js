/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    result = 0;
    var left2 = n % 2;
    var num2 = parseInt(n / 2);;
    var num1 = 0;
    if (left2 == 0) {
        num1 = 0;
    } else {
        num1 = 1;
    }
    while(num2 >= 0){
        result += C(num2 + num1, num2);
        num2--;
        num1+=2
    }
    return result;
};

var C = function(max, low) {
    if (low == 0 || max == low){
        return 1;
    }
    var lows = 1;
    for (var i = 2 ; i <= low; i++){
        lows *= i;
    }
    // console.log(lows);
    var maxs = 1;
    for (var i = max; i > max - low; i--){
        maxs *= i;
    }
    // console.log(maxs);
    return maxs / lows;
}
// console.log(C(6,4));

console.log(climbStairs(100));
