/**
Divide Two Integers
Divide two integers without using multiplication, division and mod operator.

If it is overflow, return MAX_INT.

note:js没有unsign int ，而且js在进行位运算的时候使用的是32位有符号整数进行运算，所以2^31会溢出变为负数。
因此，在溢出时，要进行回溯处理。
除数不断左移，同时记录左移的长度（即：商）。当除数大于被除数时，右移一次，保证除数小于被除数。
然后通过加法（加除数的初始值*2^n）保证除数小于等于被除数。当除数最接近被除数时，得到商的值。

 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    minus  =  0; // 0 正数，1 负数
    if(dividend > 0 && divisor < 0){
        divisor = -divisor;
        minus = 1;
    }
    if(dividend < 0 && divisor > 0){
        dividend = - dividend;
        minus = 1;
    }
    if(dividend < 0 && divisor < 0){
        dividend = -dividend;
        divisor = -divisor;
    }

    var _divisor = divisor;
    result = 1;
    flag = 1;
    while(_divisor < dividend && flag == 1){
        _divisorTemp = _divisor << 1;
        resultTemp = result << 1;
        if(_divisorTemp < 0 || resultTemp <  0){
            flag = 0;
        }else{
            _divisor = _divisorTemp;
            result = resultTemp;
        }
    }
    if(flag !== 0 && dividend !== divisor){
        _divisor >>= 1;
        result >>= 1;
    }

    var tempIndex = result;
    diff = dividend - _divisor;
    while(diff > 0 && tempIndex > 0){
        if(diff >= _divisor){
            diff -= _divisor;
            result += tempIndex;
        }else{
            tempIndex >>= 1;
            _divisor >>= 1;
        }
    }

    //2^31 - 1;
    result = minus > 0 ? -result : result;
    if(result > 2147483647) return 2147483647;
    return result;
};

var MAX_INT = Math.pow(2,31) - 1;
var MIN_INT = -MAX_INT - 1;

c = divide(0,10);
console.log(c);

c = divide(10,1);
console.log(c);

c = divide(10,2);
console.log(c);

c = divide(10,3);
console.log(c);

c = divide(10,4);
console.log(c);

c = divide(10,7);
console.log(c);

c = divide(10,9);
console.log(c);

c = divide(MIN_INT,1);
console.log(c);

//越界
c = divide(MIN_INT,-1);
console.log(c);

c = divide(MAX_INT,-1);
console.log(c);

c = divide(MAX_INT,1);
console.log(c);

c = divide(1,1);
console.log(c);

c = divide(1,-1);
console.log(c);



