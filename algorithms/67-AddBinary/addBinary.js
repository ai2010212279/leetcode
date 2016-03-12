/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var i = a.length - 1,
        j = b.length - 1;
    var x = 0;
    result = "";
    while (i > -1 && j > -1) {
        ai = a[i];
        bj = b[j];
        add = parseInt(ai) + parseInt(bj) + x;
        re = add % 2;
        x = parseInt(add / 2);
        result = re + result;
        i--;
        j--;
    }
    if (i < 0) {
        while (j > -1) {
            bj = b[j];
            add = parseInt(bj) + x;
            re = add % 2;
            x = parseInt(add / 2);
            result = re + result;
            j--;
        }
    }
    if (j < 0){
        while (i > -1){
            ai = a[i];
            add = parseInt(ai) + x;
            re = add % 2;
            x = parseInt(add / 2);
            result = re + result;
            i--;
        }
    }
    if (x > 0){
        result = x + result;
    }

    return result;
};

a = addBinary("1010", "1011");
console.log(a);
a = addBinary("101", "1");
console.log(a);
a = addBinary("110", "1");
console.log(a);
