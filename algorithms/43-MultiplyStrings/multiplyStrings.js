/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var mutiply = function(num1, num2) {
    var det = [];
    var carry = [];
    carry[num1.length + num2.length - 1] = 0;//末尾进位为0
    var k = 0;
    for (var i = num1.length - 1; i > -1; i--) {
        det[k] = [];
        for (var j = num2.length - 1; j > -1; j--) {

            temp = parseInt(num1[i]) * parseInt(num2[j]);
            det[k][i + j + 1] = temp % 10;
            carry[i + j + 1 - 1] = parseInt(temp / 10);
        }
        m = i + j + 1;
        while (m >= 0) {
            det[k][m] = 0;
            m--;
        }

        k++;
    }
    var result = [];
    var carryTemp = 0;
    for (i = 0;i < det[0].length;i++){
        total = 0;
        for (k = 0; k < det.length; k++){
            if(det[k][i]){
                total += det[k][i];
            }else{
                total += 0;
            }
        }
        total += carry[i];
        result.push(total);
    }

    while(result.length > 1 && result[0] == 0){
        result.shift();
    }
    return result;
}

a = [2];
b = [9];
c = mutiply(a, b);
console.log(c);
