/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    if(num < 1 || num > 3999) return "";
    romanMap = [];
    romanMap[1] = "I";
    romanMap[4] = "IV";
    romanMap[5] = "V";
    romanMap[9] = "IX";
    romanMap[10] = "X";
    romanMap[40] = "XL";
    romanMap[50] = "L";
    romanMap[90] = "XC";
    romanMap[100] = "C";
    romanMap[400] = "CD";
    romanMap[500] = "D";
    romanMap[900] = "CM";
    romanMap[1000] = "M";

    i = 0;
    s = "";
    while( num > 0){
        unit = num % 10;
        leftFive = unit % 5;
        timesFive = unit / 5;
        tenPower = Math.pow(10,i);
        if( leftFive > 0 && leftFive < 4){
            tempS = "";
            if( timesFive > 1){tempS = romanMap[ tenPower* 5];}
            for(j = 0;j < (leftFive);j++) {tempS += romanMap[tenPower];}
                s = tempS + s;
        }else if((leftFive) == 4){
            if(timesFive > 1){
                s = romanMap[tenPower * 9] + s;
            }else{
                s = romanMap[tenPower * 4] + s;
            }
        }else if(unit == 5){
            s = romanMap[tenPower * 5] + s;
        }
        num = parseInt(num / 10);
        i++;
    }

    return s;
};


a = intToRoman(a);
console.log(a);
