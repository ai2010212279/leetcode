/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();
    numberArr = [];
    point = 0;
    minus = 0;
    for(i=0;i<str.length;i++){
        charAcsii = str.charCodeAt(i);
        if((charAcsii > 57 || charAcsii < 48) && charAcsii !== 45 && charAcsii !== 43){
            break;
        }
        if(i !== 0 && (charAcsii === 45 || charAcsii === 43)){
            break;
        }
        if(minus && charAcsii === 45){
            continue;
        }
        if(charAcsii === 45){
            minus = 1;
            continue;
        }
        if(charAcsii === 43){
            continue;
        }
        if(charAcsii === 32 && s){
            continue;
        }

        if(numberArr.length === 0 && charAcsii == 48){  //0的情况，不能位于首位
            continue;
        }
        numberArr.push(str[i]);
    }
    console.log(numberArr);
    number = 0;
    for(i = numberArr.length - 1,j=0; i >= 0;i--,j++){
        tempNumber = numberArr[i] * Math.pow(10,j);
        number += tempNumber;
    }

    if(minus === 1){
        number *= -1;
    }

    if(number > Math.pow(2,31) - 1 ){
        return Math.pow(2,31) - 1;
    }
    if(number < -Math.pow(2,31)){
        return -Math.pow(2,31);
    }

    return number;
};


a = "   +0012345p23";
b = myAtoi(a);
console.log(b);

