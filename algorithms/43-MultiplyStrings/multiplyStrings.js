/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var det = [];
    var carry = [];
    carry[num1.length + num2.length - 1] = 0; //末尾进位为0
    var k = 0;
    for (var i = num1.length - 1; i > -1; i--) {
        det[k] = [];
        for (var j = num2.length - 1; j > -1; j--) {

            temp = parseInt(num1[i]) * parseInt(num2[j]);
            det[k][i + j + 1] = temp % 10;
            if (!carry[i + j + 1 - 1]) {
                carry[i + j + 1 - 1] = 0;
            }
            carry[i + j + 1 - 1] = carry[i + j + 1 - 1] + parseInt(temp / 10);
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
    for (i = det[0].length - 1; i > -1; i--) {
        total = 0;
        for (k = 0; k < det.length; k++) {
            if (det[k][i]) {
                total += det[k][i];
            } else {
                total += 0;
            }
        }
        total = total + carry[i] + carryTemp;
        t = total % 10;
        carryTemp = parseInt(total / 10);
        result.unshift(t);
    }
    while (result.length > 1 && result[0] == 0) {
        result.shift();
    }
    return result.join("");
}

a = "123";
b = "456";
c = multiply(a, b);
console.log(c);


a = "19";
b = "12";
c = multiply(a, b);
console.log(c);

