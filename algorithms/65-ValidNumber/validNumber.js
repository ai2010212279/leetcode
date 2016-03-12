/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    var regex = /^(\s+)?[+-]?((\d+\.)|(\.\d+)|(\d+)|(\d+\.\d+))([Ee][+-]?\d+)?(\s+)?$/;
    var result = (new RegExp(regex)).test(s);
    console.log(result);
    return result ;
};

isNumber("0.1 ");
isNumber(" 2");
isNumber("3.");
isNumber(".");

