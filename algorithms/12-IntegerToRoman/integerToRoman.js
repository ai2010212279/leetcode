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

    i = 1;
    s = "";
    while( num > 0){
        unit = num % 10;
        leftFive = unit % 5;
        timesFive = unit / 5;
        if( leftFive > 0 && leftFive < 4){//1,2,3
            tempS = "";
            if( timesFive > 1){tempS = romanMap[ i * 5 ];}
            for(j = 0;j < leftFive;j++) {
                tempS += romanMap[i];
            }
            s = tempS + s;
        }else if( leftFive === 4 || unit === 5){//4,9,5
            s = romanMap[ i * unit ] + s;
        }
        num = parseInt(num / 10);
        i *= 10;
    }

    return s;
};


a = intToRoman(250);
console.log(a);
