/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    //特殊情况
    if(x === 0) return 0;
    if(n === 0) return 1;
    //递归终止条件
    if(n === 1) return x;
    if(n === -1) return 1 / x;

    nextN = parseInt(n / 2);
    if(n < 0){
        nx = 1 / x;
    }else{
        nx = x;
    }

    value = myPow(x,nextN);
    if(n % 2 == 0){
        return value * value;
    }else{
        return value * value * nx;
    }
};

a = myPow(2,-5);
console.log(a);
b = Math.pow(2,-5);
console.log(b);

