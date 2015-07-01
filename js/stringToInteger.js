/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    integer = parseInt(str);
    if(isNaN(integer)){
        return 0;
    }
    if(integer > Math.pow(2,31) - 1 ){
        return Math.pow(2,31) - 1;
    }
    if(integer < -Math.pow(2,31)){
        return -Math.pow(2,31);
    }
    return integer;
};

a = "1";
b = myAtoi(a);
console.log(1);
