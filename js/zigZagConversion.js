/**
No.6
失败了。题目不是很清晰，各种条件比较多。
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s;
    stringArr = [];
    step = 1;
    k = 0;
    j = 0;
    i = 0;
    while(k < s.length){
        if(stringArr[i] == null) stringArr[i] = "";
       stringArr[i] += s[k];
       if(i === 0 && step === -1){
            step *= -1;
       }
       if(i === numRows -1 && step === 1){
            step *= -1;
       }
       i += step;
       k++;
    }
    return stringArr.join("");
};

s = 'ab';
a = convert(s,1);
console.log(a);



