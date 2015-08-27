/**
 * @param {string} digits
 * @return {string[]}

 时间复杂度在 O(3^n) - O(4^n)之间，最差为O(4^n)
 */



var letterCombinations = function(digits) {
    var numberDic = [];
    numberDic[0] = [];
    numberDic[1] = [];
    numberDic[2] = ['a','b','c'];
    numberDic[3] = ['d','e','f'];
    numberDic[4] = ['g','h','i'];
    numberDic[5] = ['j','k','l'];
    numberDic[6] = ['m','n','o'];
    numberDic[7] = ['p','q','r','s'];
    numberDic[8] = ['t','u','v'];
    numberDic[9] = ['w','x','y','z'];

    i = 0;
    temp = [];
    while(i < digits.length){
        number = parseInt(digits[i]);
        if(number === 0 || number === 1) {
            i++;
            continue;
        }

        if(temp.length === 0){
            temp = numberDic[number];
        }else{
            temp1 = [];
            for(j = 0;j < temp.length;j++){
                for(k = 0; k < numberDic[number].length;k++){
                    temp1.push(temp[j] + numberDic[number][k]);
                }
            }
            temp = temp1;
        }
        i++;
    }
    return temp;
};


a = "2324";
b = letterCombinations(a);
console.log(b);
console.log(b.length);

