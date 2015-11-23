/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * 思路：各个位置的数字可以根据偏移量计算得到。
 */
var getPermutation = function(n, k) {
    var notUseNumber = [];
    var total = 1;
    for (var i = 1; i <= n; i++){
        total *= i;
        notUseNumber.push(i);
    }
    k = (k-1) % total;

    var m = total / n;
    var result = [];
    while(notUseNumber.length > 0){
        var index = parseInt(k / m);
        result.push(notUseNumber[index]);
        notUseNumber.splice(index,1);
        n--;
        k = k % m;
        m = m / n;
    }
    var str = result.join("");
    console.log(str);
    return str;
};

getPermutation(3,14);
getPermutation(3,20);
