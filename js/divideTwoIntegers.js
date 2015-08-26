/**
Divide Two Integers
Divide two integers without using multiplication, division and mod operator.

If it is overflow, return MAX_INT.

 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    //2^31;
    if(dividend > 2147483648 || divisor > 2147483648) return 2147483648;
    //-(2^31 -1)
    if(dividend < -2147483647 || divisor < -2147483647) return -2147483647;
    minus  =  0; // 0 正数，1 负数
    if(dividend > 0 && divisor < 0){
        divisor = -divisor;
        minus = 1;
    }
    if(dividend < 0 && divisor > 0){
        dividend = - dividend;
        minus = 1;
    }

    var _divisor = divisor;
    result = 1;
    while(_divisor < dividend){
        _divisor = _divisor << 1;
        result = result << 1;
    }
    _divisor1 = _divisor >> 1;
    lowDiff = dividend - _divisor1;
    highDiff = _divisor - dividend
    if(lowDiff <= highDiff){
        result = result >> 1;
        while(lowDiff >= 0){
            lowDiff -= divisor;
            result += 1;
        };
        return minus ?  0-(result - 1) : result - 1;
    }else{
        while(highDiff > 0){
            highDiff -= divisor;
            result -= 1;
        }
        return minus ? 0-(result) : result;
    }
};

a = 2147483649;
b = -5;
c = divide(a,b);
console.log(c);

