/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    romanNumber = ["I","IV","V",'IX','X','XL','L','XC','C','CD','D','CM','M'];
    arabNumber = [1,4,5,9,10,40,50,90,100,400,500,900,1000];

    i = 0;
    result = 0;
    while(i < s.length ){
        romanIndex = romanNumber.indexOf(s[i]);
        nextRomanIndex = romanNumber.indexOf(s[i+1]);
        if(romanIndex < nextRomanIndex){
            result -= arabNumber[romanIndex];
        }else{
            result += arabNumber[romanIndex];
        }
        i++;
    }
    return result;
};

s = "XCVIII";
s = "DCCC";
s = "MDCCCXCIX";
a = romanToInt(s);
console.log(a);



